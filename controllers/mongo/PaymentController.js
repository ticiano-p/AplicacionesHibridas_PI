import { PaymentModel } from "../../models/mongo/PaymentModel.js";

export class PaymentController {

    static async getPayments( req, res ){
        try {
            const payments = await PaymentModel.find()
            res.json({
                message: "Payments encontrados",
                data: payments
            })
        } catch (error) {
            res.status(500).json({
                message: "Error",
                data: error
            })
        }
    }

    static async createPayment( req, res ){
        const user_id = req.body.issuedTo

        const exist = await PaymentModel.findOne({
            issuedTo: user_id,
            paymentType: 'create_school',
            status: 'pending'
        });
    
        if (exist) {
            return res.status(400).json({
                message: 'Ya generaste una solicitud de pago. Debe ser abonada primero.'
            });
        }

        const payment = await PaymentModel.create({
            issuedTo: user_id,
            concept: 'Creación de escuela',
            amount: 5000,
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 días
            paymentType: 'create_school'
        });
        payment.save()
        res.status(200).json({ message: 'Solicitud de pago generada', payment });
    }


    static async editPayment (req, res){
        try {
            const editPayment = await PaymentModel.findByIdAndUpdate( 
                req.params.id, 
                req.body, 
                { new: true }
            )
            if( !editPayment ){
                res.status(404).json({
                    message: 'El pago solicitado no existe'
                })
            }
            res.json({
                message: 'El pago fue actualizado correctamente ', editPayment
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error el querer actualizar el pago'
            })
        }
    }

    static async deletePayment (req, res){
        try {
            const payment = await PaymentModel.findByIdAndDelete(req.params.id)
            if( !payment ) res.status(404).json({ message: "Payment no encontrado" })
            res.json({ message: "Payment Eliminado" })
        } catch (error) {
            res.status(500).json({
                message: "Error",
                error: error
            })
        }
    }
}