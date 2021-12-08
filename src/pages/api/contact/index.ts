const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.NEXT_PUBLIC_SEND_GRID_API_KEY);

export default async function sendEmail(req, res) {
  const actualDate = new Date();
  const msg = {
    to: process.env.NEXT_PUBLIC_USER_EMAIL_TO,
    from: process.env.NEXT_PUBLIC_USER_EMAIL_FROM,
    subject: `Orçamento - ${actualDate.toLocaleDateString("pt-BR")}`,
    text: "Um novo orçamento foi solicitado!",
    html: `<h3>Nome:</h3><span>${req.body.name}</span><br><h3>Email:</h3><span>${req.body.email}</span><br><h3>Telefone:</h3><span>${req.body.phone}</span><br><h3>Descrição:</h3><span>${req.body.description}</span>`,
  };
  try {
    const result = await sgMail.send(msg);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, data: error });
  }
}
