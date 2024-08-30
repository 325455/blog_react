import React, { memo, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { SearchWrapper } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import taxios from "@/service";

interface Ipropos {
  children?: ReactNode;
}

const Search: React.FC<Ipropos> = () => {
  const navigate = useNavigate();
  const { querystr } = useParams();
  const [passages, setPassages] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("articles"); // 新增状态来控制当前选中的 tab

  useEffect(() => {
    async function getData() {
      const { data } = await taxios.get(`/search/${querystr}`);
      setPassages(data.passages);
      setUsers(data.users);
    }
    getData();
  }, [querystr]);

  return (
    <SearchWrapper>
      <div className="container">
        <div className="results-nav">
          <button onClick={() => setActiveTab("articles")}>文章结果</button>
          <button onClick={() => setActiveTab("users")}>用户结果</button>
        </div>
        {activeTab === "articles" && (
          <section id="article-results" className="search-results">
            <h2>{`关键字 “${querystr}”的文章搜索结果`}</h2>
            {passages.map((passage: any) => (
              <div
                className="result"
                key={passage.passageid}
                onClick={() => navigate(`/passage-detail/${passage.passageid}`)}
              >
                <h3>{passage.title}</h3>
                <p>
                  {passage.content.slice(1, 100).replace(/\#+/, "") + "..."}
                </p>
              </div>
            ))}
          </section>
        )}
        {activeTab === "users" && (
          <section id="user-results" className="search-results">
            <h2>{`关键字 “${querystr}”的用户搜索结果`}</h2>
            {users.map((user: any) => (
              <div
                className="result"
                key={user.Phone}
                onClick={() => navigate(`/user-Detail/${user.Phone}`)}
              >
                <img src={user.avatar} alt={`${user.Username} avatar`} />
                <div>
                  <h3>{user.Username}</h3>
                  <p>{user.user_rank}</p>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </SearchWrapper>
  );
};

export default memo(Search);
