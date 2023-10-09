const Object = ({ obj }) => {

    console.log(obj);

    return (
        <div>
            Object: {obj.name}
            {/* Object: {Object.entries(obj)} почему не срабатывает эта строчка??*/}
        </div>
    )
}

export default Object;