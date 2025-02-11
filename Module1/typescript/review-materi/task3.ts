class Doctor {
    public id: number
    public name: string
    public fee: number

    constructor(id: number, name: string, fee: number) {
        this.id = id
        this.name = name
        this.fee = fee
    }
}

class Specialist extends Doctor {
    public specialization: string
    constructor(id: number, name: string, fee: number, specialization: string) {
        super(id, name, fee)
        this.specialization = specialization
    }
}
class GeneralPhysician extends Doctor {
    constructor(id: number, name: string, fee: number) {
        super(id, name, fee)
    }
}

class Appointment {
    public id: number
    public patient: string
    public doctor: Doctor
    public date: Date
    public status: "Pending" | "Cancelled" | "Completed"

    constructor(id: number, patient: string, doctor: Doctor, date: Date) {
        this.id = id
        this.patient = patient
        this.doctor = doctor
        this.date = date
        this.status = "Pending"
    }
}

class Hospital {
    private doctors: Doctor[] = []
    private appointments: Appointment[] = []

    addDoctor(doctor: Doctor): void {
        this.doctors.push(doctor)
    }

    bookAppointment(patient: string, doctorId: number, date: Date): void {
        const doctor = this.doctors.find((value) => value.id === doctorId)
        let isBooked = false

        if (!doctor) {
            console.log("Doctor not found")
            return
        }

        for (let i = 0; i < this.appointments.length; i++) {
            const appointment = this.appointments[i]
            if (appointment.patient === patient && appointment.doctor.id === doctorId && appointment.date.toDateString() === date.toDateString()) {
                console.log("Anda sudah mendaftarkan janjian di dokter yang sama")
                isBooked = true
            }
        }

        if (!isBooked) {
            this.appointments.push(new Appointment(this.appointments.length + 1, patient, doctor, date))
        }

    }

    completeAppointment(id: number): void {
        const appointment = this.appointments.find((value) => value.id === id)
        if (appointment) {
            appointment.status = "Completed"
        }
    }

    cancelAppointment(id: number): void {
        const appointment = this.appointments.find((value) => value.id === id)
        if (appointment?.status === "Pending") {
            appointment.status = "Cancelled"
        }
    }

    listOfAllAppointments(): Appointment[] {
        return this.appointments
    }
}

const hospital = new Hospital()
hospital.addDoctor(new GeneralPhysician(1, "dr. Bambang", 500))

hospital.bookAppointment("Emil", 1, new Date("2025-04-01"))
console.log("list of all appointments : ", hospital.listOfAllAppointments())
hospital.bookAppointment("Emil", 1, new Date("2025-04-01"))
console.log("list of all appointments : ", hospital.listOfAllAppointments())