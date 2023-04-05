import { Table, TableInterface } from '../components/Tables/Table';
import { useEffect, useState } from 'react';
import { tablesRequest } from '../components/Tables/TablesMethods';

export function MyTables() {
  const [tables, setTables] = useState([]);
  tables.length > 0 ? console.log(tables[0]) : console.log('[]');
  const getTables = async () => await tablesRequest('singtable', 'get');

  useEffect(() => {
    getTables().then((data) => setTables(data));
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {tables.length > 0 ? (
        tables.map((table: TableInterface, i: number) => {
          return <Table columns={table['columns']} rows={table['rows']} key={i} />;
        })
      ) : (
        <div>Нет данных</div>
      )}
    </div>
  );
}
