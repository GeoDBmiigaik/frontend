import { Table, TableInterface } from '../components/Tables/Table';
import { useEffect, useState } from 'react';
import { tablesRequest } from '../components/Tables/TablesMethods';

export function MyTables() {
  const [tables, setTables] = useState([]);
  const [file, setFile] = useState();

  const getTables = async () => await tablesRequest('singtable', 'get');
  const postTables = async () => await tablesRequest('singtable', 'post', { filename: file });

  const handleFile = (event: any) => {
    setFile(event.target.files[0]['name']);
    console.log(file);
  };
  useEffect(() => {
    getTables().then((data) => setTables(data));
  }, []);

  return (
    <>
      <div className="container mx-auto max-w-2xl pt-5">
        {tables.length > 0 ? (
          tables.map((table: TableInterface, i: number) => {
            return <Table columns={table['columns']} rows={table['rows']} key={i} />;
          })
        ) : (
          <div>Нет данных</div>
        )}
      </div>
      <form>
        <input type="file" name="file" onChange={handleFile}></input>
        <button onClick={postTables}>Отправить</button>
      </form>
    </>
  );
}
