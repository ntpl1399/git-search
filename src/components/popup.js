import React from "react";

const Popup = ({ item, onClose }) => {
  return (
    <table className="table mt-3 px-2">
        <tr>
        <td className="border">
          <p>
            <strong>Avatar: </strong>
          </p>
        </td>
        <td className="border">
          <img src={item.owner.avatar_url} alt="" style={{"height" : "100px", "width" : "100px"}}/>
        </td>
      </tr>
      <tr>
        <td className="border">
          <p>
            <strong>Title: </strong>
          </p>
        </td>
        <td className="border">
          <p>{item.name}</p>
        </td>
      </tr>
      <tr>
        <td className="border">
          <p>
            <strong> Description: </strong>
          </p>
        </td>
        <td className="border">
          <p>{item.description}</p>
        </td>
      </tr>
      <tr>
        <td className="border">
          <p>
            <strong>Author:</strong>
          </p>
        </td>
        <td className="border">
          <p>{item.owner.login}</p>
        </td>
      </tr>
      <tr>
        <td className="border">
          <p>
            <strong>Created Date:</strong>
          </p>
        </td>
        <td className="border">
          <p>{new Date(item.created_at).toLocaleDateString()}</p>
        </td>
      </tr>
      <tr>
        <td className="border">
          <p>
            <strong>Modified Date:</strong>
          </p>
        </td>
        <td className="border">
          <p>{new Date(item.updated_at).toLocaleDateString()}</p>
        </td>
      </tr>
      <tr>
        <td className="border">
          <p>
            <strong>Github Link:</strong>
          </p>
        </td>
        <td className="border">
        <p><a href={item.html_url} target="_blank">Link</a></p>
        </td>
      </tr>
      <tr>
        <td className="text-center" colSpan={2}>
          <button className="btn btn-secondary" onClick={onClose}>
            Back
          </button>
        </td>
      </tr>
    </table>
  );
};

export default Popup;
