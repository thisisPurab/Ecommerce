import React from "react";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import FormatPrice from "../../src/helpers/FormatPrice";
const FilterSection = () => {
    const {
        filters: { text, maxPrice, price, minPrice },
        updateFilterValue,
        all_products,
        clearFilters,
    } = useContext(FilterContext);

    const getUniqueData = (data, property) => {
        let newVal = data.map((element) => {
            return element[property];
        });

        if (property === "colors") {
            // return (newVal = ["All", ...new Set([].concat(...newVal))]);
            newVal = newVal.flat();
        }

        return (newVal = ["All", ...new Set(newVal)]);
    };

    const uniqueCategory = getUniqueData(all_products, "category");
    const uniqueCompany = getUniqueData(all_products, "company");
    const uniqueColors = getUniqueData(all_products, "colors");

    // const [selected, setSelected] = useState(uniqueColors[0]); // Default to the first color

    return (
        <>
            <div className="my-[20px] mr-10">
                <div className="">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <input
                            className="px-4 py-2 border-2 border-black rounded-full "
                            type="text"
                            name="text"
                            value={text}
                            onChange={updateFilterValue}
                            placeholder="Search"
                        />
                    </form>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-lg font-medium mt-14 mb-4">Category</h2>
                    {uniqueCategory.map((category, index) => {
                        return (
                            <>
                                <button
                                    className="my-1"
                                    key={index}
                                    type="button"
                                    name="category"
                                    value={category}
                                    onClick={updateFilterValue}
                                >
                                    {category}
                                </button>
                            </>
                        );
                    })}
                </div>
                <div>
                    <h2 className="text-lg font-medium mt-10">Company:</h2>
                    <form action="#">
                        <select
                            name="company"
                            id="company"
                            className="my-5 -mx-2 px-4 py-2 rounded-full"
                            onChange={updateFilterValue}
                        >
                            {uniqueCompany.map((company, index) => {
                                return (
                                    <>
                                        <option
                                            key={index}
                                            value={company}
                                            name="company"
                                        >
                                            {company}
                                        </option>
                                    </>
                                );
                            })}
                        </select>
                    </form>
                </div>
                <div>
                    <h2 className="text-lg font-medium mt-10 mb-4">Color:</h2>
                    {/* {console.log(uniqueColors)} */}
                    <div className="flex justify-between items-center">
                        {uniqueColors.map((color, index) => {
                            if (color === "All") {
                                return (
                                    <>
                                        <button
                                            key={index}
                                            name="colors"
                                            value={color}
                                            type="button"
                                            className="text-xl font-light"
                                            style={{
                                                backgroundColor: color,
                                            }}
                                            onClick={updateFilterValue}
                                        >
                                            {color}
                                        </button>
                                    </>
                                );
                            } else {
                                return (
                                    <>
                                        <button
                                            key={index}
                                            name="colors"
                                            value={color}
                                            type="button"
                                            className="h-5 w-5 border-2 ml-0 mr-2 border-slate-400 rounded-full"
                                            style={{
                                                backgroundColor: color,
                                            }}
                                            onClick={updateFilterValue}
                                        ></button>
                                    </>
                                );
                            }
                        })}
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-medium mt-10 mb-4">Price</h2>
                    <p>
                        <FormatPrice price={price}> </FormatPrice>
                    </p>
                    <input
                        type="range"
                        name="price"
                        id="price"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={updateFilterValue}
                    />
                </div>
                <div>
                    {" "}
                    <button
                        className="bg-transparent px-4 py-2 mt-10 -mx-3 text-black rounded-full border-2 border-black  "
                        onClick={clearFilters}
                    >
                        Clear Filter
                    </button>
                </div>
            </div>
        </>
    );
};

export default FilterSection;
