import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';

type Props = {
    pageNumber: number;
    totalItems: number;
    pageSize: number;
    changePage: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ pageNumber, pageSize, totalItems, changePage }) => {
    const offset = Math.ceil(totalItems / pageSize);

    const handleChangePage = useCallback(
        (page: number): void => {
            if (pageNumber !== page) {
                changePage(page);
            }
        },
        [pageNumber, changePage],
    );

    const renderPaginationItem = useMemo(() => {
        const arrayPages: number[] = [];
        for (let i = 1; i <= offset; i += 1) {
            arrayPages.push(i);
        }
        return arrayPages.map((_, i) => (
            <li className={`page-item ${pageNumber === i + 1 ? 'active' : ''}`} key={`key_${i}`}>
                <Link className="page-link text-light bg-dark" to={ROUTES.ROOT} onClick={() => handleChangePage(i + 1)}>
                    {i + 1}
                </Link>
            </li>
        ));
    }, [pageNumber, offset, handleChangePage]);

    return (
        <nav>
            <ul className="pagination justify-content-center align-items-flex-end">
                <li className={`page-item ${+pageNumber === 1 ? 'disabled' : ''}`}>
                    <Link className="page-link" to={ROUTES.ROOT} onClick={() => handleChangePage(+pageNumber - 1)}>
                        &laquo;
                    </Link>
                </li>
                {renderPaginationItem}
                <li className={`page-item ${offset === +pageNumber ? 'disabled' : ''}`}>
                    <Link className="page-link" to={ROUTES.ROOT} onClick={() => handleChangePage(+pageNumber + 1)}>
                        &raquo;
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
