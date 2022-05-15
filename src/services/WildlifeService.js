import http from "../http-common";

class WildLife {
  getAll() {
    return http.get("/wildlife");
  }
  get(id) {
    return http.get(`/wildlife/${id}`);
  }
}

export default new WildLife();