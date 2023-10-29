import { v4 } from "uuid";
import { statusOption, typeOption } from "../helpers/constant";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/jobSlice";
const AddJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    //Form Datasını olsturma
    const form = new FormData(e.target);

    console.log("form icerik", form);
    //formdaki değerlerdn bir obje oluşturma
    const newJob = Object.fromEntries(form.entries());
    if (!newJob.type || !newJob.status) {
      toast.info("tüm alanları doldurunuz");
      return;
    }
    //id ekle
    newJob.id = v4();
    //tarih ekle
    newJob.date = new Date().toLocaleDateString();
    //console.log(newJob)
    axios
      .post("http://localhost:3050/jobs", newJob)
      .then(() => {
        //Yeni işi stora kaydetme
        dispatch(addJob(newJob));
        navigate("/");
        //Ekleme başarılı bildirimi
        toast.success("İş Başarıyla Eklendi");
      })
      .catch((error) => toast.error("Beklenmedik bir hata oluştu..."));
  };
  return (
    <div className="add-sec">
      <h2>Yeni İş Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Pozisyon</label>
          <input type="text" required name="position" />
        </div>
        <div>
          <label htmlFor="">Şirket</label>
          <input type="text" required name="company" />
        </div>
        <div>
          <label htmlFor="">Lokasyon</label>
          <input type="text" required name="location" />
        </div>
        <div>
          <label htmlFor="">Durum</label>
          <select name="status">
            <option selected disabled>
              Seçiniz
            </option>
            {statusOption.map((status, i) => (
              <option key={i}>{status}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Tur</label>
          <select name="type">
            <option selected disabled>
              Seçiniz
            </option>
            {typeOption.map((status, i) => (
              <option key={i}>{status}</option>
            ))}
          </select>
        </div>
        <div>
          <button>Ekle</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
