import http from "../http-common";

class PollutingImpact {
  getAll() {
    return http.get("/pollution");
  }
  get(id) {
    return http.get(`/pollution/${id}`);
  }
}

export default new PollutingImpact();
