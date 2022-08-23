let employees = []

function employeeInfo (name, title, salary, status){
    this.name = name
    this.jobTitle = title
    this.salary = salary
    this.currentStatus = status
    this.printEmployeeForm = function(){
        return console.log(this.name, this.jobTitle, this.salary, this.currentStatus)
    }
}

const joe = new employeeInfo("Joe", "Manager", 200,000, "Full Time")
const james = new employeeInfo("James", "Janitor", 40,000, "Part Time")
const sara = new employeeInfo("Sara", "Senior Engineer", 150,000, "Contract")
employees = [joe, james, sara]

joe.printEmployeeForm()
james.printEmployeeForm()
sara.printEmployeeForm()
