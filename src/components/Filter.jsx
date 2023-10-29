import { useRef } from "react";
import { sortOption, statusOption, typeOption } from "../helpers/constant";
import { useDispatch } from "react-redux";
import {
  clearFilters,
  filterBySearch,
  filterByStatus,
  filterByType,
  sortJobs,
} from "../redux/jobSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const inputRef = useRef();
  const typeRef = useRef();
  const statusRef = useRef();
  const sortRef = useRef();

  const handleReset = () => {
    dispatch(clearFilters());
    inputRef.current.value = "";
    typeRef.current.value = "seciniz";
    statusRef.current.value = "seciniz";
    sortRef.current.value = "seciniz";
  };

  return (
    <div className="filter-sec">
      <h2>Filtre Formu</h2>
      <form>
        <div>
          <label htmlFor="">Arama</label>
          <input
            ref={inputRef}
            onChange={(e) => dispatch(filterBySearch(e.target.value))}
            type="text"
            placeholder="orn: amazon"
          />
        </div>
        <div>
          <label htmlFor="">Durum</label>
          <select
            ref={statusRef}
            name="status"
            id=""
            onChange={(e) => dispatch(filterByStatus(e.target.value))}
          >
            <option disabled selected>
              Seciniz
            </option>
            {statusOption.map((statu, index) => (
              <option key={index}>{statu}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Tur</label>
          <select
            ref={typeRef}
            name="type"
            id=""
            onChange={(e) => dispatch(filterByType(e.target.value))}
          >
            <option disabled selected>
              Seciniz
            </option>
            {typeOption.map((type, index) => (
              <option key={index}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Sırala</label>
          <select
            ref={sortRef}
            name="sort"
            id=""
            onChange={(e) => dispatch(sortJobs(e.target.value))}
          >
            <option disabled selected>
              Seciniz
            </option>
            {sortOption.map((sort, index) => (
              <option key={index}>{sort}</option>
            ))}
          </select>
        </div>

        <div>
          <button type="button" onClick={handleReset}>
            Filtreleri Temizle
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
