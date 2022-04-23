import { PaginationList, PaginationItem } from './Pagination.module';

interface IPaginationProps {
    currentPage: number;
    maxPageLimit: number;
    minPageLimit: number;
    itemsLength: number;
    itemsPerPage: number;
    onPageChange: (id: number) => void;
    onNextClick: () => void;
    onPrevClick: () => void;
}

const Pagination = (props: IPaginationProps) => {
    const {
        currentPage,
        maxPageLimit,
        minPageLimit,
        itemsLength,
        itemsPerPage,
    } = props;

    const totalPages = Math.ceil(itemsLength / itemsPerPage);

    const pages = [];
    for (let i = 1; i < totalPages; i++) {
        pages.push(i);
    }

    const handlePageClick = (e: any) => {
        props.onPageChange(Number(e.target.id));
    };

    const handleNextClick = () => {
        props.onNextClick();
    };
    const handlePrevClick = () => {
        props.onPrevClick();
    };

    const pageNumbers = pages.map((page) => {
        if (page <= maxPageLimit && page > minPageLimit) {
            return (
                <PaginationItem
                    key={page}
                    id={`${page}`}
                    onClick={handlePageClick}
                    active={currentPage === page}
                >
                    {page}
                </PaginationItem>
            );
        } else {
            return null;
        }
    });

    let pageIncrementEllipses = null;
    if (pages.length > maxPageLimit) {
        pageIncrementEllipses = (
            <PaginationItem onClick={handleNextClick}>&hellip;</PaginationItem>
        );
    }
    let pageDecrementEllipses = null;
    if (minPageLimit >= 1) {
        pageDecrementEllipses = (
            <PaginationItem onClick={handlePrevClick}>&hellip;</PaginationItem>
        );
    }

    return (
        <PaginationList>
            <PaginationItem>
                <button
                    onClick={handlePrevClick}
                    disabled={currentPage === pages[0]}
                >
                    Prev
                </button>
            </PaginationItem>
            {pageDecrementEllipses}
            {pageNumbers}
            {pageIncrementEllipses}
            <PaginationItem>
                <button
                    onClick={handleNextClick}
                    disabled={currentPage === pages[pages.length - 1]}
                >
                    &gt;Next
                </button>
            </PaginationItem>
        </PaginationList>
    );
};

export default Pagination;
