import { useState, useEffect } from 'react';
import { Button } from '@components';
import { fetchData } from '@utils';

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await fetchData(currentPage);

        setTotalPages(result.info.pages);
        setData(result.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [currentPage]);

  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  if (loading) return <p className='text-center text-lg'>Loading...</p>;

  if (error) return <p className='text-center text-red-500'>Error: {error}</p>;

  return (
    <>
      <ul className='mb-5 flex flex-wrap justify-center gap-3'>
        {data.map(item => (
          <li className='w-40 flex flex-col items-center gap-1' key={item.id}>
            <img src={item.image} alt={item.name} />
            <p className='text-xs text-center'>{item.name}</p>
          </li>
        ))}
      </ul>
      <p className='text-center mb-2 text-sm'>
        Page {currentPage} of {totalPages}
      </p>
      <div className='mb-3 flex justify-center gap-5'>
        <Button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </Button>
        <Button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </>
  );
};
