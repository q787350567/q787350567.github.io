// 创建一个 axios 实例
const instance = axios.create({
  baseURL: "https://api.spotify.com/v1", // 替换为你的 API 基础 URL
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/index.html"; // 确保路径正确
      location.removeItem("token");
    }
    return Promise.reject(error);
  }
);

// 导出实例
window.axiosInstance = instance;
