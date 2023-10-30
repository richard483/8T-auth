// export default {
//   name: 'template',
//   template: `
//     <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8">
//   <title>${contract.title}</title>
//   <style>
//     html {
//       background-color: rgb(156, 156, 156);
//     }
//     body {
//       size : A4;
//       padding: 2cm;
//       background-color: white;
//     }
//     h1 {
//       text-align: center;
//     }
//     h3 {
//       text-align: center;
//     }
//     table {
//       margin-top: 0.25cm;
//     }
//     table tr td {
//       padding: 5px;
//     }
//     .signature {
//       display: flex;
//       justify-content: space-between;
//       margin-top: 2.5cm;
//     }
//   </style>
// </head>
// <body>
//   <div>
//     <h1>Surat Perjanjian Kerja Lepas</h1>
//     <h3>Nomor: ${contract.number}</h3>
//     <p>Yang bertanda tangan di bawah ini:</p>
//     <table>
//       <tr>
//         <td>Nama</td>
//         <td>:</td>
//         <td>${contract.worker.name}</td>
//       </tr>
//       <tr>
//         <td>Alamat</td>
//         <td>:</td>
//         <td>${contract.worker.address}</td>
//       </tr>
//       <tr>
//         <td>No. Telepon</td>
//         <td>:</td>
//         <td>${contract.worker.phone}</td>
//       </tr>
//     </table>
//     <p>Selanjutnya disebut sebagai <b>PEKERJA</b></p>
//     <p>Dengan ini menyatakan bahwa PEKERJA telah sepakat untuk bekerja pada <b>PERUSAHAAN</b> dengan ketentuan sebagai berikut:</p>
//     <table>
//       <tr>
//         <td>Nama</td>
//         <td>:</td>
//         <td>${contract.company.name}</td>
//       </tr>
//       <tr>
//         <td>Alamat</td>
//         <td>:</td>
//         <td>${contract.company.address}</td>
//       </tr>
//       <tr>
//         <td>No. Telepon</td>
//         <td>:</td>
//         <td>${contract.company.phone}</td>
//       </tr>
//     </table>
//     <p>Selanjutnya disebut sebagai <b>PERUSAHAAN</b></p>
//     <br>
//     <p>PEKERJA akan bekerja pada bagian <b>${contract.position}</b> dengan ketentuan sebagai berikut:</p>
//     <table>
//       <tr>
//         <td>Waktu Kerja</td>
//         <td>:</td>
//         <td>${contract.work_time}</td>
//       </tr>
//       <tr>
//         <td>Upah</td>
//         <td>:</td>
//         <td>${contract.salary}</td>
//       </tr>
//       <tr>
//         <td>Periode Pembayaran</td>
//         <td>:</td>
//         <td>${contract.payment_method}</td>
//       </tr>
//       <tr>
//         <td>Periode Kontrak</td>
//         <td>:</td>
//         <td>${contract.periode}</td>
//       </tr>
//     </table>
//     <p>Demikian surat perjanjian ini dibuat dan ditandatangani oleh kedua belah pihak pada tanggal ${contract.createdAt}.</p>
//     <div class="signature">
//       <p>${contract.worker.name}</p>
//       <p>${contract.company.name}</p>
//     </div>
//   </div>
// </body>
// </html>`,
// };
