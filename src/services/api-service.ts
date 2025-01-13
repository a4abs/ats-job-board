import axios from "axios";

export default class GhostBlogService {
  static async sendRequestCallback(data: {
    name: string;
    email: string;
    phone: string;
    type: string;
  }) {
    return axios({
      method: "POST",
      baseURL: "https://webmail.savannahr.com",
      url: "/savanna/api/v1/request-callback",
      data,
    });
  }

  static async submitJob(data: any) {
    return axios({
      method: "POST",
      baseURL: "https://webmail.savannahr.com",
      url: "/savanna/api/v1/submit-job",
      data,
    });
  }

  static async submitCVToATS(data: any) {
    return axios({
      method: "POST",
      baseURL: "https://hxl.api.develop.technocube.in",
      url: "/api/v1/talent-pool/submit-cv",
      data,
    });
  }

  static async submitCV(data: any) {
    return axios({
      method: "POST",
      baseURL: "https://webmail.savannahr.com",
      url: "/savanna/api/v1/submit-cv",
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
