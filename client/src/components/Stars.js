// import { array } from "prop-types";
// import React from "react";
// import { FaRegStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";

// const Stars = ({ stars, reviews }) => {
//     const ratingStar = Array.from({ length: 5 }, (elem, index) => {
//         let number = index + 0.5;
//         debugger;
//         return (
//             <span key={index}>
//                 {stars >= index + 1 ? (
//                     <FaStar />
//                 ) : stars >= number ? (
//                     <FaStarHalfAlt />
//                 ) : (
//                     <FaRegStar />
//                 )}
//             </span>
//         );
//     });

//     return (
//         <>
//             <div className="flex justify-start items-center">
//                 {ratingStar}

//                 <p>({reviews} customer reviews)</p>
//             </div>
//         </>
//     );
// };

// export default Stars;

import React from "react";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";

const Stars = ({ stars, reviews }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        // console.log(index, number, stars, reviews);
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar />
                ) : stars >= number ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
        );
    });

    return (
        <div className="flex justify-start items-center">
            <div className="flex items-center mr-2">{ratingStar}</div>
            <p>({reviews} customer reviews)</p>
        </div>
    );
};

export default Stars;
