class Employee {
    public name: string
    public workingHours: number[]

    constructor(name: string) {
        this.name = name;
        this.workingHours = []
    }

    addWorkingHours(hours: number): void {
        if (hours > 0) {
            this.workingHours.push(hours)
        }
    }

    calculateTotalSalary(): number {
        return 0; // akan dioverride ke FullTimeEmployee dan PartTimeEmployee
    }
}


class FullTimeEmployee extends Employee {
    private hourlyRate: number = 100000
    private reducedRate: number = 75000

    calculateTotalSalary(): number {
        let totalSalary = 0;
        for (let i = 0; i < this.workingHours.length; i++) {
            if (this.workingHours[i] > 6) {
                totalSalary += this.workingHours[i] * this.reducedRate
            } else {
                totalSalary += this.workingHours[i] * this.hourlyRate
            }
        }
        return totalSalary;
    }
}

class PartTimeEmployee extends Employee {
    private hourlyRate: number = 50000
    private reducedRate: number = 30000

    calculateTotalSalary(): number {
        let totalSalary = 0;
        for (let i = 0; i < this.workingHours.length; i++) {
            if (this.workingHours[i] > 6) {
                totalSalary += this.workingHours[i] * this.reducedRate
            } else {
                totalSalary += this.workingHours[i] * this.hourlyRate
            }
        }
        return totalSalary;
    }
}


let fullTimeEmployee = new FullTimeEmployee("Budi");
fullTimeEmployee.addWorkingHours(5)
fullTimeEmployee.addWorkingHours(7)
console.log("Total Gaji Full-Time Employee : ", fullTimeEmployee.calculateTotalSalary())

let partTimeEmployee = new PartTimeEmployee("Agus")
partTimeEmployee.addWorkingHours(4);
partTimeEmployee.addWorkingHours(8);
console.log("Total Gaji Part-Time Employee : ", fullTimeEmployee.calculateTotalSalary())

