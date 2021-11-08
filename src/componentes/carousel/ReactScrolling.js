import React from "react";
import leftArrowIcon from './utils/left-arrow.png'
import rightArrowIcon from './utils/right-arrow.png'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}` }));

function ReactScrolling() {
    const [items] = React.useState(getItems);
    const [selected, setSelected] = React.useState([]);

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick = (id) => ({ getItemById, scrollToItem }) => {
        const itemSelected = isItemSelected(id)

        setSelected((currentSelected) =>
            itemSelected
                ? currentSelected.filter((el) => el !== id)
                : currentSelected.concat(id)
        );
    }

    return (
        <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
        >
            {items.map(({ id }) => (
                <Card
                    itemId={id} // NOTE: itemId is required for track items
                    title={id}
                    key={id}
                    onClick={handleClick(id)}
                    selected={isItemSelected(id)}
                />)
            )}

        </ScrollMenu>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

    return (
        <button disabled={isFirstItemVisible} onClick={() => scrollPrev()} >
            <img src={leftArrowIcon} alt='left-arrow' width={40} height={40} />
        </button>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

    return (
        <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
            <img src={rightArrowIcon} alt='right-arrow' width={40} height={40} />
        </button>
    );
}

function Card({
    onClick,
    selected,
    title,
    itemId
}) {
    const visibility = React.useContext(VisibilityContext)

    return (
        <div
            onClick={() => onClick(visibility)}
            style={{
                width: "160px",
            }}
            tabIndex={0}
        >
            <div className="card">
                <div>{title}</div>
                <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
                <div>selected: {JSON.stringify(!!selected)}</div>
            </div>
            <div
                style={{
                    height: "200px",
                }}
            />
        </div>
    );
}

export default ReactScrolling;