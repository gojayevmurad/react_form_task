import React, { useState } from "react";
import SelectBox from "../../../../../components/SelectBox/SelectBox.tsx";
import { useDispatch } from "react-redux";

import "./generalQuestions.scss";

import { setGeneralQuestions } from "src/redux/user/userSlice.ts";
import { useNavigate } from "react-router-dom";

const currentOccupations: Array<string> = [
  "Təhsil alıram",
  "Çalışıram",
  "İşsiz",
  "Təhsil alıram və çalışıram",
  "Təhsil almıram",
];

const educationOptions: Array<string> = [
  "Orta təhsil",
  "Peşə təhsili",
  "Bakalavr",
  "Magistratura",
  "PhD",
];

const educationLevels: Array<string> = ["Əlaçı", "Zərbəçi", "Heç biri"];

const GeneralQuestions: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentOccupation, setCurrentOccupation] = useState("");
  const [education, setEducation] = useState("");
  const [educationLevel, setEducationLevel] = useState("");

  const handleNext = () => {
    dispatch(
      setGeneralQuestions({
        currentOccupation,
        education,
        schoolEducationLevel: educationLevel,
      })
    );

    navigate("education-questions");
  };

  return (
    <div className="general-questions">
      <span className="primary-color">Ümumi suallar</span>
      <div className="steps">
        <div className="step active">1</div>
        <div className="step">2</div>
        <div className="step">3</div>
      </div>
      <label>
        Hazırda məşğuliyyətiniz:<span className="red">*</span>
        <SelectBox
          placeholder="Seçin.."
          options={currentOccupations}
          option={currentOccupation}
          setOption={setCurrentOccupation}
        />
      </label>
      <label>
        Təhsiliniz<span className="red">*</span>
        <SelectBox
          placeholder="Seçin.."
          option={education}
          setOption={setEducation}
          options={educationOptions}
        />
      </label>
      <label>
        Orta məktəb göstəriciləriniz aşağıdakılardan hansına uyğun gəlir?
        <span className="red">*</span>
        <SelectBox
          placeholder="Seçin.."
          option={educationLevel}
          options={educationLevels}
          setOption={setEducationLevel}
        />
      </label>
      <button onClick={handleNext} className="next" type="button">
        Növbəti
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default GeneralQuestions;
