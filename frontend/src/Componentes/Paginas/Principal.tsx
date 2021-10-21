import React from "react";

const Principal = () => {
  return (
    <div className="conteiner">
      <div className="row p-2">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary">
            Analizar
          </button>
          <button type="button" className="btn btn-secondary">
            AST
          </button>
          <button type="button" className="btn btn-secondary">
            Errores
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <label htmlFor="exampleFormControlTextarea1">Editor</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={15}
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="col offset-md-1">
          <div className="card">
            <div className="card-body">
              <label htmlFor="exampleFormControlTextarea1">Consola</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={15}
                defaultValue={""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
