import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "../components/popup"; // Custom popup component

const RepositoryList = ({ repositories }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  
  const pageSize = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");


  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handlePageChange = (page) => {          
    setCurrentPage(page);
  };

  // Function to handle sorting
  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = sortColumn
    ? [...repositories].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn])
          return sortDirection === "asc" ? -1 : 1;
        if (a[sortColumn] > b[sortColumn])
          return sortDirection === "asc" ? 1 : -1;
        return 0;
      })
    : repositories;

  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <div className="text-center">
        {!showPopup && (
          <div>
            <table className="table table-bordered mt-2">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border col-md-1">
                    #
                  </th>
                  <th
                    scope="col"
                    className="border col-md-2"
                    onClick={() => handleSort('name')}
                  >
                     Name {sortColumn === 'name' && sortDirection === 'asc' && '▲'}
                    {sortColumn === 'name' && sortDirection === 'desc' && '▼'}
                  </th>
                  <th
                    scope="col"
                    className="border col-md-4"
                    onClick={() => handleSort('description')}
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="border col-md-1"
                    onClick={() => handleSort('login')}
                  >
                    Owner
                  </th>
                  <th
                    scope="col"
                    className="border col-md-1"
                    onClick={() => handleSort('created_at')}
                  >
                    Created Date
                  </th>
                  <th
                    scope="col"
                    className="border col-md-2"
                    onClick={() => handleSort('updated_at')}
                  >
                    Modified Date
                  </th>
                  <th scope="col" className="border col-md-1">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((repo, index) => (
                  <tr key={index}>
                    <td scope="row" className="border col-md-1">
                      {index + 1}
                    </td>
                    <td className="border col-md-2">{repo.name}</td>
                    <td className="border col-md-4">{repo.description}</td>
                    <td className="border col-md-1">{repo.owner.login}</td>
                    <td className="border col-md-1">
                      {new Date(repo.created_at).toLocaleDateString()}
                    </td>
                    <td className="border col-md-2">
                      {new Date(repo.updated_at).toLocaleDateString()}
                    </td>
                    <td className="border col-md-1">
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => handleViewDetails(repo)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              {Array.from(
                { length: Math.ceil(sortedData.length / pageSize) },
                (_, index) => (
                  <button className="btn btn-primary m-2"
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>
          </div>
        )}
        {showPopup && (
          <div className="text-start">
            {" "}
            <Popup item={selectedItem} onClose={handleClosePopup} />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default RepositoryList;
