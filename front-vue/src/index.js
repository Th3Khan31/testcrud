import './assets/plugins/fontawesome-free/css/all.min.css';
import './assets/css/app.css';
// import '../template-html/AdminLTE-master/dist/css/adminlte.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'sweetalert2/dist/sweetalert2.min.css';

let render = () => {
  import("./assets/css/adminlte.min.css").then(() =>
    require("./main")
  );
};


render();
