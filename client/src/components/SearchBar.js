import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { requestTitle, receiveTitle, receiveTitleError } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(0);
  const allArticles = useSelector((state) => state.titles.titles);
  useEffect(() => {
    dispatch(requestTitle());
    fetch("/titles")
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveTitle(data));
      })
      .catch((error) => {
        dispatch(receiveTitleError(error));
      });
  }, []);
  let matches = allArticles.filter((word) => {
    let limit = value.length > 1;
    let showCase = "";
    if (word.title) {
      showCase = word.title.toLowerCase().includes(value.toLowerCase());
    }
    return showCase && limit;
  });

  const handleValue = (event) => {
    console.log(event);
    // event.preventDefault();
    setValue(event);
  };
  return (
    <Wrapper>
      <Container>
        <div className="searchContainer">
          <Search
            type="text"
            value={value}
            placeholder="Find an Article"
            onChange={(ev) => setValue(ev.target.value)}
            onKeyDown={(ev) => {
              switch (ev.key) {
                case "Enter": {
                  ev.preventDefault();
                  handleValue(value);
                  return;
                }
                case "ArrowUp": {
                  ev.preventDefault();
                  if (selected > 0) setSelected(selected - 1);
                  break;
                }
                case "ArrowDown": {
                  ev.preventDefault();
                  if (selected < matches.length - 1) setSelected(selected + 1);
                  break;
                }
                default: {
                  return;
                }
              }
            }}
          ></Search>
          <Link to={`/article/${value.split(" ").join("_")}`}>
            <Button onClick={() => setValue(value)}>Search for Truth</Button>
          </Link>
        </div>
        {matches.length > 0 ? (
          <ListWrapper>
            {Object.values(matches).map((article, index) => {
              console.log("MATHCES", matches);
              let theSelection = selected === index;
              return (
                <List
                  onClick={() => handleValue(article.title)}
                  style={{
                    background: theSelection ? "gray" : "white",
                    color: theSelection ? "white" : "black",
                  }}
                  test={article.title}
                  key={index}
                >
                  {article.title}
                </List>
              );
            })}
          </ListWrapper>
        ) : (
          <></>
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 550px;
  background-color: white;
  height: 110px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 49px 10px 10px 0px;
  .searchContainer {
    display: flex;
    flex-direction: row;
  }
`;

const Search = styled.input`
  width: 350px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
`;
const Button = styled.button`
  height: 45px;
  width: max-content;
  background: #696969;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  padding: 0px 20px;
  font-size: 18px;
  color: #fff;
  &:hover {
    color: black;
  }
`;
const ListWrapper = styled.ul`
  text-decoration: none;
  list-style-type: none;
  background: #ffffff;
  padding: 0px;
  margin-right: 17px;
`;

const List = styled.li`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: black;
  line-height: 1.25;
  border: none;
  text-align: left;
  cursor: pointer;
`;
export default SearchBar;
