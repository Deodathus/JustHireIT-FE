
export default function OfferSalary(props) {
    const salary = props.salary;

    let lowestSalary = salary.lowestSalary;
    let highestSalary = salary.highestSalary;

    if (lowestSalary && highestSalary) {
        return (
            <>
                <span className={'salaryBadge'}>{lowestSalary} - {highestSalary}</span>
            </>
        );
    } else {
        return (
            <>
                <span className={'salaryBadge'}>Undisclosed Salary</span>
            </>
        );
    }
}
