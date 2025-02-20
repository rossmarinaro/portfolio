import Image from 'next/image'
import DOTS from '../../public/dots.svg'
import  { useMemo } from 'react'


export const PageSize = 5;

const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, index) => index + start);
}

const usePagination = (props: any) => {

    const paginationRange = useMemo(() => {

        const totalPageCount = Math.ceil(props.totalCount / props.pageSize),
              totalPageNumbers = props.siblingCount + 5;
        
        if (totalPageNumbers >= totalPageCount)
            return range(1, totalPageCount);

        const leftSiblingIndex = Math.max(props.currentPage - props.siblingCount, 1),
              rightSiblingIndex = Math.min(
                props.currentPage + props.siblingCount,
                totalPageCount
              ), 

        shouldShowLeftDots = leftSiblingIndex > 2,
        shouldShowRightDots = rightSiblingIndex < totalPageCount - 2,
        firstPageIndex = 1,
        lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            
            let leftItemCount = 2 + 3 * props.siblingCount,
                leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {

            let rightItemCount = 2 + 3 * props.siblingCount,
                rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);

            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
        
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);

            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }

    }, [props.totalCount, props.pageSize, props.siblingCount, props.currentPage]);

    return paginationRange;

}


//------------------------------------------------


export const Pagination = (props: any) => {

    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage, 
        pageSize,
        className
    } = props,

    paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount, 
        pageSize
    });

    if (currentPage === 0 || (paginationRange && paginationRange.length < 2))
        return null;
    
    const onNext = () => onPageChange(currentPage + 1),
          onPrevious = () => onPageChange(currentPage - 1);

    let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

    return (

        <div id="pagination">

            <ul className={ `flex pagination-container-${className} mt-5 pl-[50%] w-full bg-[#00ff4c] rounded-xl`}>
                
                <li className={ currentPage === 1 ? 'pagination-item' : 'pagination-item' } onClick={ onPrevious }>

                <div className="arrow left" />

                </li>

                { paginationRange?.map(pageNumber => {
                    
                        if (pageNumber === DOTS)
                            return <li style={{ padding: '10px' }} key={ pageNumber } className="pagination-item dots"><Image key={ pageNumber } src={ DOTS } alt="pagination-dots" /> </li>

                        return (
                            
                            <li style={{ padding: '10px' }} key="" className="pagination-item" onClick={() => onPageChange(pageNumber)}> 
                                { pageNumber }
                            </li>
                        )
                    })
                }

                {/* right nav arrow */}

                { currentPage === lastPage && <li className={ 'pagination-item pl-5' } onClick={ onNext }><div className="arrow right" /></li> }

            </ul>
        </div>
    );
}