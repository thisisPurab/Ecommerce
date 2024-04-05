import React, { useContext } from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { FilterContext } from "../context/FilterContext";

const Sort = () => {
    const { filter_products, isGridView, setGridView, setListView, sorting } =
        useContext(FilterContext);
    return (
        <Wrapper className="sort-section">
            {/* 1st column  */}
            <div className="sorting-list--grid">
                <button
                    className={isGridView ? "active sort-btn" : "sort-btn"}
                    onClick={setGridView}
                >
                    <BsFillGridFill className="icon" />
                </button>

                <button
                    className={isGridView ? "sort-btn" : "active sort-btn"}
                    onClick={setListView}
                >
                    <BsList className="icon" />
                </button>
            </div>
            {/* 2nd column  */}
            <div className="product-data">
                <p>{`${filter_products.length} Product Available`}</p>
            </div>

            {/* 3rd column  */}
            <div className="sort-selection">
                <form action="#">
                    <label htmlFor="sort"></label>
                    <select
                        name="sort"
                        id="sort"
                        className="sort-selection--style"
                        onChange={sorting}
                    >
                        <option value="lowest">Price(lowest)</option>
                        <option
                            value="#"
                            disabled
                        ></option>
                        <option value="highest">Price(highest)</option>
                        <option
                            value="#"
                            disabled
                        ></option>
                        <option value="a-z">Name(a-z)</option>
                        <option
                            value="#"
                            disabled
                        ></option>
                        <option value="z-a">Name(z-a)</option>
                    </select>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 0px 0spx 0px 15px;
    margin-top: 20px;
    margin-bottom: 0px;

    .sorting-list--grid {
        display: flex;
        gap: 5px;

        .sort-btn {
            padding: 0.5rem;
            border: 2px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 6px;
        }

        .icon {
            font-size: 1rem;
        }
        .active {
            background-color: #000;
            color: #fff;
        }
    }

    .sort-selection .sort-selection--style {
        padding: 0.6rem;
        cursor: pointer;
        border-radius: 20px;

        .sort-select--option {
            padding: 0.5rem 0;
            cursor: pointer;
            height: 2rem;
            padding: 10px;
            border-radius: 15px;
        }
    }
`;

export default Sort;
