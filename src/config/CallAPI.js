
import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authorization:
      "Bearer jmNPsL4UB_0xK7btN4hB-AAHyPX2GM9Pgv-VPnvmtt5tOuLQ2TIfJjiHz85DQJVT5d4_EGikMibXyf_cs3vbsCJHGlsisE7k40zaYU5m-tS62C2yB87tK3l6w68RX3Yx"
  }
});


 