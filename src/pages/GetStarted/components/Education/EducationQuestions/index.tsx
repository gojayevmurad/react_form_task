import { useState } from "react";
import { useDispatch } from "react-redux";

import "./educationQuestions.scss";

import SelectBox from "src/components/SelectBox/SelectBox";
import Radio from "src/components/Radio/Radio";

import { countries } from "src/constants/countries";
import { specialities } from "src/constants/specialities";
import { useNavigate } from "react-router-dom";

const appealOptionsList = [
  "Attestat - GPA",
  "Language test(IELTS TOEFL)",
  "GRE/GMAT",
  "SAT",
];

const EducationQuestions: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //! education datas
  const [country, setCountry] = useState<string>("");
  const [speciality, setSpeciality] = useState("");
  const [criteria, setCriteria] = useState("");
  const [isAlreadyStudent, setIsAlreadyStudent] = useState(false);
  const [appealOptions, setAppealOptions] = useState<string[]>([]);

  const handleNext = () => {};

  const removeAppealOption = (deletedOption: string): void => {
    setAppealOptions(appealOptions.filter((item) => item !== deletedOption));
  };

  return (
    <div className="education-questions">
      <div className="education-questions__head">
        <span className="primary-color">
          Orta texniki və ali təhsil sualları
        </span>
        <div className="steps">
          <div className="step active">1</div>
          <div className="step active">2</div>
          <div className="step">3</div>
        </div>
      </div>
      <div className="education-questions__content">
        <label>
          <p>
            <span className="green">Bakalavr</span>-təhsilinizlə bağlı detalları
            qeyd edin:
          </p>
          <SelectBox
            placeholder="Ölkə"
            option={country}
            setOption={setCountry}
            options={countries}
          />
        </label>
        <label>
          <p>Universitetin adı:</p>
          <input type="text" placeholder="ADNSU" />
        </label>
        <label>
          <p>İxtisas</p>
          <SelectBox
            placeholder="İnformasiya Texnologiyaları"
            option={speciality}
            setOption={setSpeciality}
            options={specialities}
          />
        </label>
        <div className="dates">
          <label>
            <p>Üniversitetə qəbul olma tarixi</p>
            <div>
              <input type="date" />
            </div>
          </label>
          <label>
            <p>Üniversiteti bitirmə tarixi</p>
            <div>
              <input type="date" disabled={isAlreadyStudent} />
            </div>
          </label>
          <div>
            <label className="already">
              <p>Hal hazırda çalışıram</p>
              <input
                onChange={() => setIsAlreadyStudent(!isAlreadyStudent)}
                type="checkbox"
              />
            </label>
          </div>
        </div>
        <div className="criteria">
          <p>Hansı meyarlarla qəbul olmusunuz</p>
          <div className="options">
            <Radio
              value="Local imtahan"
              setValue={setCriteria}
              activeValue={criteria}
            />
            <Radio
              value="Müraciət"
              setValue={setCriteria}
              activeValue={criteria}
            />
            <Radio
              value="Hər ikisi"
              setValue={setCriteria}
              activeValue={criteria}
            />
          </div>
        </div>
        <div className="get_exam_details">
          {(criteria == "Local imtahan" || criteria == "Hər ikisi") && (
            <div className="local_exam">
              <p>
                Lokal imtahanın adını, topladığınız bal və maksimal bal qeyd
                edin
              </p>
              <div>
                <input type="text" placeholder="Imtahan" />
                <input type="number" placeholder="bal" />
                <input type="number" placeholder="max bal" />
              </div>
            </div>
          )}
          {(criteria == "Müraciət" || criteria == "Hər ikisi") && (
            <div className="appeal">
              <div className="type-appeal">
                <p>
                  Müraciət zamanı hansı kriteriyalarla müraciətinizin
                  qiymətləndirildiyini qeyd edin:
                </p>
                <div>
                  <SelectBox
                    placeholder="Attestat - GPA"
                    options={appealOptionsList}
                    option={appealOptions}
                    setOption={setAppealOptions}
                    multiple={true}
                  />
                </div>
              </div>
              {appealOptions.map((item) => {
                return (
                  <div className="appeal-block">
                    <div>
                      <p>
                        <span className="green">{item}</span> üzrə, nəticənizi
                        qeyd edin
                      </p>

                      <svg
                        onClick={() => removeAppealOption(item)}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9s9-4.038 9-9s-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7s7 3.14 7 7s-3.141 7-7 7zm.707-7l2.646-2.646a.502.502 0 0 0 0-.707a.502.502 0 0 0-.707 0L12 11.293L9.354 8.646a.5.5 0 0 0-.707.707L11.293 12l-2.646 2.646a.5.5 0 0 0 .707.708L12 12.707l2.646 2.646a.5.5 0 1 0 .708-.706L12.707 12z"
                        ></path>
                      </svg>
                    </div>
                    {item.includes("Language") ? (
                      <>
                        <input
                          style={{ marginBottom: 10 }}
                          type="text"
                          placeholder="IELTS Nəticə"
                        />
                        <input type="text" placeholder="TOEFL Nəticə" />
                      </>
                    ) : (
                      <input type="text" placeholder="Nəticə" />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <button className="save" type="button">
          Yadda saxla
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style={{ fontSize: 25 }}
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m5 12l5 5L20 7"
            ></path>
          </svg>
        </button>
      </div>
      <div className="education-questions__actions">
        <button
          type="button"
          className="action_btn prev"
          onClick={() => navigate("/get-started/education")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              fill="currentColor"
              d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"
            ></path>
          </svg>
          Geri
        </button>
        <button className="action_btn next" type="button">
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
    </div>
  );
};

export default EducationQuestions;
