import React from "react";
import { Outlet } from "react-router-dom";

import "./getStarted.scss";

const urlSegment = new URL(window.location.href).pathname.split("/")[2];

const navigations = [
  {
    path: "education",
    label: "Təhsil",
  },
  {
    path: "language-skills",
    label: "Dil Bilikləri",
  },
  {
    path: "skills",
    label: "Bacarıqlar",
  },
  {
    path: "sport",
    label: "İdman",
  },

  {
    path: "work-experience",
    label: "İş təcrübəsi",
  },
  {
    path: "program",
    label: "Proqram",
  },
];

const GetStarted: React.FC = () => {
  return (
    <div className="get_started">
      <div className="decorations">
        <div className="line--1"></div>
        <div className="line--2"></div>
        <svg
          viewBox="0 0 791 653"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="color-dec"
        >
          <path
            d="M113.5 -334L485.238 -154.269L790.5 -69L509.5 82.5L444.144 117.737C302.948 193.862 184.655 306.327 101.5 443.5L37.9999 548.25L-25.5003 653L-269.213 448.5L-301.074 495.813L-81.9998 170.5L113.5 -334Z"
            fill="url(#paint0_linear_52_1432)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_52_1432"
              x1="337.775"
              y1="-332.635"
              x2="-448.536"
              y2="317.447"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00404C"></stop>
              <stop offset="1" stop-color="#08D0B0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="intro">
        <div className="intro--header">
          <svg
            viewBox="0 0 750 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_32_176)">
              <path
                d="M21.67 27.3601H1.8C0.81 27.3601 0 26.5601 0 25.5601V17.4401C0 16.4501 0.81 15.6401 1.8 15.6401H54.43C55.42 15.6401 56.23 16.4401 56.23 17.4401V25.5601C56.23 26.5501 55.43 27.3601 54.43 27.3601H34.55V82.1901C34.55 83.1801 33.75 83.9901 32.75 83.9901H23.46C22.47 83.9901 21.66 83.1901 21.66 82.1901V27.3601H21.67Z"
                fill="white"
              ></path>
              <path
                d="M137.19 17.4401V72.0701H170.54C171.53 72.0701 172.34 72.8701 172.34 73.8701V82.1901C172.34 83.1801 171.54 83.9901 170.54 83.9901H126.1C125.11 83.9901 124.3 83.1901 124.3 82.1901V17.4401C124.3 16.4501 125.1 15.6401 126.1 15.6401H135.39C136.38 15.6401 137.19 16.4401 137.19 17.4401Z"
                fill="white"
              ></path>
              <path
                d="M230.52 83.9801H182.96C181.97 83.9801 181.16 83.1801 181.16 82.1801V17.4401C181.16 16.4501 181.96 15.6401 182.96 15.6401H230.52C231.51 15.6401 232.32 16.4401 232.32 17.4401V26.3401C232.32 27.3301 231.51 28.1401 230.52 28.1401H193.95V43.8601H229.15C230.14 43.8601 230.95 44.6601 230.95 45.6601V54.0701C230.95 55.0601 230.15 55.8701 229.15 55.8701H193.95V71.2901H230.52C231.51 71.2901 232.32 72.0901 232.32 73.0901V82.1901C232.32 83.1801 231.51 83.9901 230.52 83.9901"
                fill="white"
              ></path>
              <path
                d="M748.2 83.9801H700.64C699.65 83.9801 698.84 83.1801 698.84 82.1801V17.4401C698.84 16.4501 699.64 15.6401 700.64 15.6401H748.2C749.19 15.6401 750 16.4401 750 17.4401V26.3401C750 27.3301 749.19 28.1401 748.2 28.1401H711.63V43.8601H746.83C747.82 43.8601 748.63 44.6601 748.63 45.6601V54.0701C748.63 55.0601 747.83 55.8701 746.83 55.8701H711.63V71.2901H748.2C749.19 71.2901 750 72.0901 750 73.0901V82.1901C750 83.1801 749.19 83.9901 748.2 83.9901"
                fill="white"
              ></path>
              <path
                d="M287.92 61.6301V17.4401C287.92 16.4501 288.72 15.6401 289.72 15.6401H299.01C300 15.6401 300.81 16.4401 300.81 17.4401V82.1801C300.81 83.1701 300.01 83.9801 299.01 83.9801H291.23C290.68 83.9801 290.17 83.7301 289.83 83.3101L254.05 38.4901V82.1901C254.05 83.1801 253.25 83.9901 252.25 83.9901H242.96C241.97 83.9901 241.16 83.1901 241.16 82.1901V17.4401C241.16 16.4501 241.96 15.6401 242.96 15.6401H250.74C251.29 15.6401 251.81 15.8901 252.15 16.3201L287.93 61.6201L287.92 61.6301Z"
                fill="white"
              ></path>
              <path
                d="M331.31 27.3601H311.43C310.44 27.3601 309.63 26.5601 309.63 25.5601V17.4401C309.63 16.4501 310.44 15.6401 311.43 15.6401H364.07C365.06 15.6401 365.87 16.4401 365.87 17.4401V25.5601C365.87 26.5501 365.07 27.3601 364.07 27.3601H344.19V82.1901C344.19 83.1801 343.39 83.9901 342.39 83.9901H333.1C332.11 83.9901 331.3 83.1901 331.3 82.1901V27.3601H331.31Z"
                fill="white"
              ></path>
              <path
                d="M438.62 31.4298C437.85 31.8298 436.93 31.5998 436.39 30.9398C433.56 27.5098 427.69 24.5298 421.04 24.5298C411.47 24.5298 406.89 28.5298 406.89 33.6098C406.89 39.5698 413.92 41.2198 422.12 42.1998C436.37 43.9598 449.65 47.6698 449.65 63.9698C449.65 79.1998 436.18 85.7398 420.95 85.7398C407.61 85.7398 397.21 81.8198 391.88 70.5598C391.46 69.6798 391.81 68.6198 392.67 68.1698L400.26 64.2398C401.13 63.7898 402.19 64.1298 402.66 64.9898C406.11 71.3798 413.46 74.2198 421.14 74.2198C429.24 74.2198 436.86 71.3898 436.86 63.9698C436.86 57.5298 430.13 54.8898 421.04 53.9098C407.08 52.2498 394.19 48.5398 394.19 33.2098C394.19 19.1498 408.05 13.3898 420.65 13.2998C430.7 13.2998 441.09 15.9998 446.57 25.1698C447.11 26.0698 446.78 27.2398 445.85 27.7098L438.62 31.4298Z"
                fill="white"
              ></path>
              <path
                d="M517.15 74.0698C517.89 74.8198 517.82 76.0198 517.03 76.7098C510.22 82.7298 501.69 85.5398 492.48 85.5398C467.1 85.5398 456.36 68.0698 456.26 50.2998C456.16 32.4298 467.78 14.2798 492.48 14.2798C501.13 14.2798 509.36 17.3398 516.13 23.3798C516.92 24.0898 516.97 25.2998 516.21 26.0398L510.18 31.8598C509.53 32.4898 508.5 32.5398 507.8 31.9598C503.46 28.2998 497.93 26.5798 492.48 26.5798C475.98 26.5798 468.85 38.8798 468.95 50.2998C469.05 61.6198 475.59 73.4398 492.48 73.4398C497.92 73.4398 504.02 71.3998 508.46 67.6098C509.17 67.0098 510.22 67.0698 510.87 67.7298L517.14 74.0698H517.15Z"
                fill="white"
              ></path>
              <path
                d="M609.33 85.8999C589.68 105.55 557.82 105.55 538.17 85.8999C518.52 66.2499 518.52 34.3899 538.17 14.7399C557.82 -4.91006 589.68 -4.91006 609.33 14.7399C628.98 34.3899 628.98 66.2499 609.33 85.8999ZM604.73 27.8599L607.9 24.6899C608.56 24.0299 608.6 22.9899 608.01 22.2599C607.09 21.1399 606.12 20.0399 605.07 18.9999C604.02 17.9499 602.93 16.9699 601.81 16.0599C601.09 15.4699 600.04 15.5099 599.38 16.1699L596.21 19.3399C597.82 20.5099 599.36 21.8099 600.81 23.2599C602.26 24.7099 603.57 26.2499 604.74 27.8599L577.86 54.7399C575.65 56.9499 572.16 57.0799 569.79 55.1499C569.63 55.0199 569.48 54.8799 569.33 54.7399C569.18 54.5899 569.05 54.4399 568.92 54.2799C566.99 51.9099 567.13 48.4199 569.33 46.2099L596.21 19.3299C580.64 8.00994 558.46 9.88994 545.08 24.9699C532.39 39.2699 532.35 61.1999 544.98 75.5499C559.72 92.2999 585.28 92.9099 600.81 77.3799C614.3 63.8899 615.61 42.8299 604.74 27.8599"
                fill="#60C4B0"
              ></path>
              <path
                d="M691.52 80.99L672.73 59.77C685.71 57.13 690.01 47.66 690.01 38.29C690.01 26.48 681.52 15.74 665.41 15.64C655.18 15.64 644.94 15.55 634.7 15.54C633.71 15.54 632.9 16.35 632.9 17.34V82.18C632.9 83.17 633.71 83.98 634.7 83.98H643.99C644.98 83.98 645.79 83.18 645.79 82.18V61.13H658.87L678.15 83.35C678.49 83.74 678.99 83.97 679.51 83.97H690.18C691.73 83.97 692.55 82.14 691.52 80.98M645.78 49.51V27.65H665.4C673.5 27.65 677.12 33.12 677.12 38.58C677.12 44.04 673.6 49.51 665.4 49.51H645.78Z"
                fill="white"
              ></path>
              <path
                d="M115.34 81.5401L90.63 16.8001C90.36 16.1001 89.7 15.6401 88.95 15.6401H77.63C76.89 15.6401 76.22 16.1001 75.95 16.8001L51.24 81.5401C50.79 82.7201 51.66 83.9801 52.92 83.9801H62.87C63.61 83.9801 64.28 83.5201 64.55 82.8201L83.3 33.7101L102.05 82.8201C102.32 83.5201 102.98 83.9801 103.73 83.9801H113.68C114.94 83.9801 115.81 82.7201 115.36 81.5401"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_32_176">
                <rect width="750" height="100.63" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <p>Süni intellekt sistemi</p>
        </div>
        <p>
          Bu formu doldurduqdan sonra öz yaşıdlarınız ən yaxşı hansı faizlikdə
          olduğunuzu müəyyən edə biləcəksiniz.
        </p>
      </div>
      <div className="get_started--content">
        <div>
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pc-svg"
          >
            <g clip-path="url(#clip0_52_1475)">
              <mask
                id="mask0_52_1475"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="320"
                height="322"
                style={{ maskType: "luminance" }}
              >
                <path d="M320 0H0V322H320V0Z" fill="white"></path>
              </mask>
              <g mask="url(#mask0_52_1475)">
                <path
                  d="M83.175 136.691H251.498C253.846 136.691 255.751 138.607 255.751 140.971V251.554C255.751 253.918 253.846 255.834 251.498 255.834H83.175C80.8262 255.834 78.9219 253.918 78.9219 251.554V140.971C78.9219 138.607 80.8262 136.691 83.175 136.691Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M85.1279 141.697H249.546V250.834H85.1279V141.697Z"
                  fill="#BEDEFE"
                ></path>
                <path
                  d="M282.149 261.037H52.6735C50.5541 261.037 48.8418 259.887 48.8418 258.47C48.8418 257.053 50.5541 255.904 52.6735 255.904H282.149C284.264 255.904 285.981 257.053 285.981 258.47C285.981 259.887 284.259 261.037 282.149 261.037Z"
                  fill="#646464"
                ></path>
                <path
                  d="M65.001 244.397H269.669V250.074C269.669 253.256 267.106 255.834 263.945 255.834H70.7258C67.5642 255.834 65.001 253.256 65.001 250.074V244.397Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M134.047 244.397H200.626V247.591C200.626 249.382 199.183 250.834 197.403 250.834H137.265C135.485 250.834 134.042 249.382 134.042 247.591V244.397H134.047Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M175.831 152.562H241.876V241.721H175.831V152.562Z"
                  fill="#D1E6F6"
                ></path>
                <path
                  d="M196.698 83.2571L168.167 126.028L135.737 103.862L163.711 60.392L196.698 83.2571Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M196.528 81.151L167.996 123.923L136.909 102.676L165.279 57.9853L196.528 81.151Z"
                  fill="#FEF7E3"
                ></path>
                <path
                  d="M201.715 79.4331L173.185 122.199L140.748 100.033L168.728 56.5628L201.715 79.4331Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M140.765 100.045C140.765 100.045 136.698 103.176 135.75 103.87C148.393 82.3364 151.496 77.2131 165.055 56.9459C165.055 56.9459 165.912 54.5922 168.755 56.5657L140.765 100.045Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M161.878 73.0967C161.878 73.0967 173.967 81.5172 181.698 86.9016"
                  stroke="#FEF7E3"
                  strokeWidth="1.40965"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M165.608 68.4731C165.608 68.4731 173.887 74.2398 179.222 77.9552"
                  stroke="#FEF7E3"
                  strokeWidth="1.40965"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M58.8359 82.769L51.626 93.5629"
                  stroke="#646464"
                  strokeWidth="2.576"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M51.4862 90.6654L54.1746 92.4825C54.599 92.7698 54.7102 93.3486 54.4229 93.7759L50.1689 100.099C49.8813 100.526 49.3043 100.64 48.8796 100.353L46.1914 98.5351C45.7667 98.2482 45.6555 97.6691 45.9431 97.2421L50.1973 90.9192C50.4846 90.4922 51.0618 90.3785 51.4862 90.6654Z"
                  fill="#646464"
                ></path>
                <path
                  d="M109.803 158.934H142.225C144.115 158.934 145.646 160.476 145.646 162.377V180.723C145.646 182.624 144.115 184.165 142.225 184.165H109.803C107.914 184.165 106.382 182.624 106.382 180.723V162.377C106.382 160.476 107.914 158.934 109.803 158.934Z"
                  fill="#FEF7E3"
                ></path>
                <path
                  d="M132.617 170.984L122.881 165.963C122.721 165.879 122.523 165.941 122.439 166.103C122.415 166.15 122.402 166.203 122.402 166.257V176.302C122.399 176.484 122.543 176.634 122.724 176.637C122.779 176.638 122.833 176.625 122.881 176.599L132.617 171.575C132.779 171.491 132.843 171.29 132.759 171.127C132.728 171.066 132.678 171.016 132.617 170.984Z"
                  fill="#646464"
                ></path>
                <path
                  d="M189.125 163.477H198.429C199.661 163.477 200.66 164.482 200.66 165.722V170.077C200.66 171.316 199.661 172.322 198.429 172.322H189.125C187.893 172.322 186.895 171.316 186.895 170.077V165.722C186.895 164.482 187.893 163.477 189.125 163.477Z"
                  fill="#FEF7E3"
                ></path>
                <path
                  d="M194.583 167.719L194.482 167.667C194.478 167.665 194.474 167.666 194.472 167.67C194.472 167.671 194.472 167.672 194.472 167.673V167.777C194.472 167.78 194.475 167.784 194.479 167.784C194.48 167.784 194.481 167.783 194.482 167.783L194.583 167.731C194.586 167.729 194.588 167.725 194.586 167.722C194.585 167.72 194.584 167.719 194.583 167.719Z"
                  fill="#646464"
                ></path>
                <path
                  d="M193.326 193.108H193.523C193.549 193.108 193.57 193.129 193.57 193.155V193.247C193.57 193.274 193.549 193.295 193.523 193.295H193.326C193.3 193.295 193.279 193.274 193.279 193.247V193.155C193.279 193.129 193.3 193.108 193.326 193.108Z"
                  fill="#FEF7E3"
                ></path>
                <path
                  d="M209.126 164.757H239.064"
                  stroke="#FEF7E3"
                  strokeWidth="1.06138"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M209.126 168.416H229.749"
                  stroke="#FEF7E3"
                  strokeWidth="0.731149"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M209.126 172.321H210.645"
                  stroke="#FEF7E3"
                  strokeWidth="0.0538598"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M168.616 227.494H82.1152C83.2173 229.629 83.7927 231.999 83.7927 234.405C83.7927 236.811 83.2173 239.181 82.1152 241.316H168.616C172.41 241.316 175.484 238.222 175.484 234.405C175.484 230.588 172.41 227.494 168.616 227.494Z"
                  fill="#FEF7E3"
                ></path>
                <path
                  d="M81.2223 241.346H168.616C172.409 241.346 175.484 238.252 175.484 234.435C175.484 230.619 172.409 227.524 168.616 227.524H81.1631C80.998 227.526 80.8438 227.444 80.7513 227.307L79.7158 225.782C79.55 225.566 79.5894 225.256 79.8038 225.089C79.8975 225.016 80.0147 224.98 80.1331 224.987H170.216C175.458 224.987 179.708 229.264 179.708 234.539C179.708 239.814 175.458 244.09 170.216 244.09H80.1033C79.8329 244.103 79.6038 243.891 79.5923 243.619C79.5875 243.506 79.6207 243.396 79.6867 243.306L80.8003 241.588C80.8886 241.438 81.0489 241.346 81.2223 241.346Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M85.5798 222.361H172.081C170.98 220.226 170.406 217.856 170.408 215.45C170.406 213.045 170.98 210.675 172.081 208.54H85.5798C81.7868 208.54 78.7119 211.634 78.7119 215.45C78.7119 219.267 81.7868 222.361 85.5798 222.361Z"
                  fill="#FEF7E3"
                ></path>
                <path
                  d="M172.974 208.504H85.5801C81.7872 208.504 78.7123 211.598 78.7123 215.415C78.7123 219.232 81.7872 222.326 85.5801 222.326H173.033C173.198 222.324 173.353 222.405 173.445 222.543L174.48 224.059C174.643 224.276 174.599 224.586 174.383 224.75C174.291 224.819 174.178 224.854 174.063 224.848H83.9811C78.7385 224.848 74.4883 220.572 74.4883 215.297C74.4883 210.021 78.7385 205.745 83.9811 205.745H174.092C174.363 205.73 174.594 205.939 174.609 206.211C174.615 206.325 174.581 206.437 174.514 206.529L173.391 208.282C173.299 208.423 173.142 208.507 172.974 208.504Z"
                  fill="#F7C348"
                ></path>
                <path
                  d="M169.681 191.108H77.2393C78.0681 193.03 78.4924 195.104 78.4853 197.2C78.4927 199.295 78.0684 201.369 77.2393 203.292H169.681C172.507 203.292 174.803 200.566 174.803 197.2C174.803 193.838 172.507 191.108 169.681 191.108Z"
                  fill="#FEF7E3"
                ></path>
                <path
                  d="M76.5612 203.292H169.681C172.506 203.292 174.802 200.567 174.802 197.2C174.802 193.839 172.506 191.109 169.681 191.109H76.5218C76.3913 191.108 76.2719 191.034 76.213 190.916L75.4428 189.588C75.3045 189.38 75.3609 189.098 75.5679 188.959C75.6233 188.922 75.6863 188.897 75.7519 188.888H170.867C174.792 188.888 177.932 192.654 177.932 197.279C177.932 201.919 174.772 205.671 170.867 205.671H75.7321C75.4857 205.633 75.3164 205.402 75.3538 205.154C75.3631 205.092 75.3852 205.032 75.4181 204.98L76.2521 203.469C76.318 203.361 76.4345 203.293 76.5612 203.292Z"
                  fill="#4A90E2"
                ></path>
                <path
                  d="M29.2274 60.9367L32.6253 64.5418C40.6499 73.063 47.0455 82.9954 51.4911 93.8425L51.9771 95.0284C51.9771 95.0284 61.2504 96.3445 62.9994 87.9281C55.3547 78.3577 48.9756 67.8325 44.0227 56.6156L42.5305 52.5612L29.2274 60.9367Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M42.541 52.5457C42.9638 53.2294 40.3363 55.6515 36.6631 57.9553C32.9902 60.2591 29.6551 61.5974 29.2322 60.9138C28.8094 60.2298 31.4531 57.7789 35.1263 55.4755C38.7996 53.1717 42.1133 51.8618 42.541 52.5457Z"
                  fill="#27C392"
                ></path>
                <path
                  d="M42.5539 52.5695C42.5539 52.5695 35.1439 58.2408 32.1866 58.7099L33.0266 59.9929C34.2781 59.3851 35.4949 58.7078 36.6714 57.9643C40.2898 55.6775 42.9011 53.284 42.5539 52.5695Z"
                  fill="#27C392"
                ></path>
                <path
                  d="M51.1487 70.6151C51.0964 71.6597 50.489 76.1335 42.9352 77.5992C43.3918 78.2947 43.8479 79.0002 44.304 79.7054C49.0849 78.5506 51.3244 76.2313 52.373 74.4284C52.5349 74.1403 52.7358 73.7602 52.8736 73.4657C52.2848 72.5297 51.7099 71.5793 51.1487 70.6151Z"
                  fill="#27C392"
                ></path>
                <path
                  d="M43.6842 76.3374L32.751 75.3809L35.2374 77.7265L33.5472 80.4728L44.0448 78.3559L43.6842 76.3374Z"
                  fill="#27C392"
                ></path>
                <path
                  d="M44.5522 78.9489L40.3173 85.5673L43.1057 84.6596L44.0566 86.8778L46.2449 79.8024L44.5522 78.9489Z"
                  fill="#27C392"
                ></path>
                <path
                  d="M45.9577 80.8502C43.9703 80.9469 42.2798 79.4057 42.1811 77.4082C42.0825 75.4104 43.6135 73.7126 45.6006 73.6159C47.588 73.5195 49.2792 75.0607 49.3778 77.0582C49.3792 77.0937 49.3807 77.1293 49.3815 77.1647C49.4501 79.1336 47.9177 80.7836 45.959 80.8502L45.9577 80.8502Z"
                  fill="#27C392"
                ></path>
                <path
                  d="M218.114 115.445C219.566 115.445 220.743 116.629 220.743 118.091C220.743 119.552 219.566 120.737 218.114 120.737C216.662 120.737 215.484 119.552 215.484 118.091C215.484 116.629 216.662 115.445 218.114 115.445Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M100.315 75.6353L105.863 81.2185L100.315 86.8011L94.7666 81.2185L100.315 75.6353Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M286.97 173.769C286.232 172.803 284.852 172.622 283.888 173.365L283.285 173.828L282.821 173.223C282.083 172.257 280.703 172.075 279.739 172.819C278.775 173.562 278.59 174.947 279.325 175.916L279.789 176.521L282.462 180.026L285.958 177.334L286.561 176.866C287.522 176.121 287.705 174.737 286.97 173.769Z"
                  fill="#4A90E2"
                ></path>
                <path
                  d="M229.034 78.068C227.948 77.5221 226.629 77.9606 226.083 79.0479L225.749 79.7174L225.069 79.3741C223.983 78.8257 222.662 79.264 222.118 80.3537L222.118 80.3543C221.573 81.4401 222.008 82.766 223.091 83.3158C223.094 83.3173 223.097 83.3186 223.1 83.3201L223.776 83.6623L227.712 85.654L229.682 81.7037L230.021 81.0252C230.556 79.9359 230.115 78.6162 229.034 78.068Z"
                  fill="#F7C348"
                ></path>
                <path
                  d="M37.3945 153.609C38.5237 153.609 39.4396 154.531 39.4396 155.667C39.4396 156.803 38.5237 157.725 37.3945 157.725C36.2649 157.725 35.3486 156.803 35.3486 155.667C35.3486 154.531 36.2649 153.609 37.3945 153.609Z"
                  fill="#F7C348"
                ></path>
                <path
                  d="M251.439 107.34L258.755 105.808L262.462 123.765L255.146 125.302C250.193 126.264 245.408 123.009 244.459 118.034C243.53 113.164 246.622 108.428 251.439 107.34Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M278.702 102.372L280.246 102.043C281.487 101.787 282.7 102.585 282.96 103.829L285.424 115.864C285.678 117.111 284.881 118.33 283.641 118.594L282.098 118.916L278.702 102.372Z"
                  fill="#27C392"
                ></path>
                <path
                  d="M260.984 100.847L272.942 90.1242C274.446 88.77 276.015 89.2885 276.424 91.2724L284.421 129.996C284.83 131.98 283.596 133.086 281.683 132.456L266.474 127.432L260.984 100.847Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M51.5623 198.282L42.1135 197.593C41.8372 197.569 41.5947 197.775 41.5711 198.053C41.5641 198.137 41.5781 198.221 41.6116 198.299L44.9844 206.303C45.0922 206.563 45.3889 206.686 45.6476 206.577C45.7233 206.545 45.7898 206.496 45.8423 206.433L51.9129 199.113C52.0924 198.9 52.0663 198.582 51.8551 198.401C51.7728 198.331 51.67 198.289 51.5623 198.282Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M92.8782 123.106C91.9705 124.461 90.3592 125.161 88.7575 124.896C75.4862 122.703 63.839 114.827 56.8403 103.313C55.9918 101.925 56.0334 100.164 56.9476 98.8128L69.7977 79.7139L105.729 104.012L92.8782 123.106Z"
                  fill="#646464"
                ></path>
                <path
                  d="M111.338 112.447L92.7359 83.3364C92.5312 83.0184 92.2051 82.7993 91.8337 82.7306L57.9449 76.3476C57.2024 76.2046 56.4823 76.6932 56.3372 77.4394C56.2648 77.8106 56.3478 78.1949 56.567 78.5018L76.1321 106.217C76.3235 106.491 76.6082 106.685 76.9326 106.763L109.857 114.536C110.595 114.711 111.338 114.251 111.515 113.509C111.602 113.145 111.538 112.762 111.338 112.447Z"
                  fill="#01414D"
                ></path>
                <path
                  d="M59.254 82.2702L86.0037 87.5033"
                  stroke="#646464"
                  strokeWidth="2.576"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_52_1475">
                <rect width="320" height="322" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="get_started--content__form">
          <ul>
            {navigations.map((navigation, index) => {
              const isPathActive = urlSegment == navigation.path;
              return (
                <li key={index} data-active={isPathActive ? true : false}>
                  {isPathActive && <div>{index + 1}.</div>}
                  {navigation.label}
                </li>
              );
            })}
          </ul>
          <form>
            <Outlet />
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
