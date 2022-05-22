import { Pagination, PaginationItem } from "@mui/material";
import React from "react";
import { PagesType } from "../types";
import './Pages.css'

const Pages = ({ pageNumber, setPageNumber }: PagesType) => {
  function nextPage(event: React.ChangeEvent<unknown>, value: number) {
    setPageNumber(value);
  }

  return (
    <Pagination
      className="pages"
      count={15}
      size="large"
      page={pageNumber}
      onChange={nextPage}
      renderItem={(value) => {
        let colorTheme = "white";
        let fontSize = "1rem";
        if (
          value.type === "page" && value.page?.toLocaleString() === pageNumber.toLocaleString()
        ) {
          colorTheme = "white";
          fontSize = "1.1rem";
        }
        return (
          <PaginationItem
            sx={{
              color: 'white',
              margin: "10px",
              fontWeight: "bolder",
              fontSize: fontSize,
            }}
            {...value}
          />
        );
      }}
    />
  );
};

export default Pages;
