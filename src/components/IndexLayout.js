
export default function IndexLayout(props) {
    const generalData = props.generalData;

    return (
        <div>
            Hello world! {generalData.year}
        </div>
    );
}
