using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;
using System.IO;

namespace DeteccionTexturas
{
    public partial class Form1 : Form
    {
        Bitmap bmp;
        int pR, pG, pB, ids;
        private Random rnd = new Random();

        private void guardarpunto_Click(object sender, EventArgs e)
        {
            int mR = 0, mG = 0, mB = 0;
            Color c = new Color();
            Bitmap bmpR = new Bitmap(bmp.Width, bmp.Height);
            Color co = Color.FromArgb(rnd.Next(256), rnd.Next(256), rnd.Next(256));
            for (int i = 0; i < bmp.Width - 10; i = i + 10)         /// controlando el ancho y
                for (int j = 0; j < bmp.Height - 10; j = j + 10)   /// el alto de ma imagen 
                {
                    mR = 0;
                    mG = 0;
                    mB = 0;
                    for (int ki = i; ki < i + 10; ki++)           /// controlando los posiciones X,Y
                        for (int kj = j; kj < j + 10; kj++)
                        {
                            c = bmp.GetPixel(ki, kj);

                            mR = mR + c.R;
                            mG = mG + c.G;
                            mB = mB + c.B;
                        }
                    mR = mR / 100;
                    mG = mG / 100;
                    mB = mB / 100;
                    //c = bmp.GetPixel(i, j);

                    if (pR - 5 <= mR && mR <= pR + 5 && pG - 5 <= mG && mG <= pG + 5 && pB - 5 <= mB && mB <= pB + 5)
                    {
                        for (int ki = i; ki < i + 10; ki++)
                            for (int kj = j; kj < j + 10; kj++)
                            {
                                bmpR.SetPixel(ki, kj, co);
                            }
                    }
                    else
                    {
                        for (int ki = i; ki < i + 10; ki++)
                            for (int kj = j; kj < j + 10; kj++)
                            {
                                c = bmp.GetPixel(ki, kj);
                                bmpR.SetPixel(ki, kj, Color.FromArgb(c.R, c.G, c.B));
                            }
                    }
                }
            pictureBox1.Image = bmpR;
            bmp = bmpR;
            //guardando texturas
            using (Modelo.vestimentaEntities db = new Modelo.vestimentaEntities())
            {
                Modelo.textura oTextura = new Modelo.textura();
                oTextura.R = Convert.ToInt16(textBox2.Text);
                oTextura.G = Convert.ToInt16(textBox3.Text);
                oTextura.B = Convert.ToInt16(textBox4.Text);
                oTextura.id_ima = ids;
                oTextura.pR = pR;
                oTextura.pG = pG;
                oTextura.pB = pB;

                db.textura.Add(oTextura);
                db.SaveChanges();

            }  // MessageBox.Show("Textura Guardadas");
        }

        private void recuperarimagen_Click(object sender, EventArgs e)
        {
            textBox1.Text = "";
            textBox2.Text = "";
            textBox3.Text = "";
            textBox4.Text = "";
            textBox5.Text = "";

            // recuperando imagen de DB
            int id = 0;
            if (dataGridView1.Rows.Count > 0)
            {
                id = int.Parse(dataGridView1.Rows[dataGridView1.CurrentRow.Index].Cells[0].Value.ToString());
                using (Modelo.vestimentaEntities db = new Modelo.vestimentaEntities())
                {
                    var oImage = db.imagenes.Find(id);
                    MemoryStream ms = new MemoryStream(oImage.imagen);
                    bmp = new Bitmap(ms);
                    pictureBox2.Image = bmp;
                }
            }
            // recuperando datos de tabla textura de DB
            SqlConnection con = new SqlConnection();
            con.ConnectionString = "server=(local);database=vestimenta;user=ProgM324;pwd=123456";
            SqlDataAdapter ada = new SqlDataAdapter();
            ada.SelectCommand = new SqlCommand();
            ada.SelectCommand.Connection = con;
            ada.SelectCommand.CommandText = "select I.nombre, T.R,T.G,T.B,T.pR,T.pG,T.pB from imagenes as I inner join textura as T on I.id=T.id_ima where id_ima ='" + id + "'";
            DataSet ds = new DataSet();
            ada.Fill(ds);
            dataGridView2.DataSource = ds.Tables[0];
            textBox5.Text = (dataGridView2.RowCount-1).ToString();
    
            // recuperando texturas en la imagen          
            if (dataGridView2.Rows.Count > 0)
            {
                for (int f = 0; f < dataGridView2.RowCount - 1; f++)
                {
                    int wR = Convert.ToInt16(dataGridView2.Rows[f].Cells[4].Value.ToString());
                    int wG = Convert.ToInt16(dataGridView2.Rows[f].Cells[5].Value.ToString());
                    int wB = Convert.ToInt16(dataGridView2.Rows[f].Cells[6].Value.ToString());
                    //coloreando imagen

                    int mR = 0, mG = 0, mB = 0;
                    Color c = new Color();
                    Bitmap bmpR = new Bitmap(bmp.Width, bmp.Height);
                    for (int i = 0; i < bmp.Width - 10; i = i + 10)         /// controlando el ancho y
                        for (int j = 0; j < bmp.Height - 10; j = j + 10)   /// el alto de ma imagen 
                        {
                            mR = 0;
                            mG = 0;
                            mB = 0;
                            for (int ki = i; ki < i + 10; ki++)           /// controlando los posiciones X,Y
                                for (int kj = j; kj < j + 10; kj++)
                                {
                                    c = bmp.GetPixel(ki, kj);

                                    mR = mR + c.R;
                                    mG = mG + c.G;
                                    mB = mB + c.B;
                                }
                            mR = mR / 100;
                            mG = mG / 100;
                            mB = mB / 100;
                            //c = bmp.GetPixel(i, j);

                            if (wR - 5 <= mR && mR <= wR + 5 && wG - 5 <= mG && mG <= wG + 5 && wB - 5 <= mB && mB <= wB + 5)
                            {
                                for (int ki = i; ki < i + 10; ki++)
                                    for (int kj = j; kj < j + 10; kj++)
                                    {
                                        bmpR.SetPixel(ki, kj, Color.Yellow);
                                    }
                            }
                            else
                            {
                                for (int ki = i; ki < i + 10; ki++)
                                    for (int kj = j; kj < j + 10; kj++)
                                    {
                                        c = bmp.GetPixel(ki, kj);
                                        bmpR.SetPixel(ki, kj, Color.FromArgb(c.R, c.G, c.B));
                                    }
                            }
                        }
                    pictureBox2.Image = bmpR;
                    bmp = bmpR;
                }
            }
        }

        private void pictureBox1_MouseClick(object sender, MouseEventArgs e)
        {
            Color c = new Color();
            for (int ki = e.X; ki < e.X + 10; ki++)
                for (int kj = e.Y; kj < e.Y + 10; kj++)
                {
                    c = bmp.GetPixel(ki, kj);
                    pR = pR + c.R;
                    pG = pG + c.G;
                    pB = pB + c.B;
                }
            pR = pR / 100;
            pG = pG / 100;
            pB = pB / 100;

            textBox2.Text = c.R.ToString();
            textBox3.Text = c.G.ToString();
            textBox4.Text = c.B.ToString();
        }

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            migrilla();
        }

        private void groupBox1_Enter(object sender, EventArgs e)
        {

        }

        private void cargaimagen_Click(object sender, EventArgs e)
        {
            textBox1.Text = "";
            textBox2.Text = "";
            textBox3.Text = "";
            textBox4.Text = "";
            pictureBox1.Image = null;
            pictureBox2.Image = null;

            openFileDialog1.Filter = "Todos(*.*)|*.*|(*.jpg)|*.jpg|(*.png)|*.png|(*.jpeg)|*.jpeg";
            openFileDialog1.ShowDialog();
            bmp = new Bitmap(openFileDialog1.FileName);
            pictureBox1.Image = bmp;
        }

        private void guardarimagen_Click(object sender, EventArgs e)
        {
            byte[] file = null;
            Stream mystream = openFileDialog1.OpenFile();

            using (MemoryStream ms = new MemoryStream())
            {
                mystream.CopyTo(ms);
                file = ms.ToArray();
            }
            using (Modelo.vestimentaEntities db = new Modelo.vestimentaEntities())
            {
                Modelo.imagenes oImage = new Modelo.imagenes();
                oImage.nombre = textBox1.Text.Trim();
                oImage.imagen = file;

                db.imagenes.Add(oImage);
                db.SaveChanges();
                ids = oImage.id;
            }
            MessageBox.Show("Guardado");
            migrilla();
        }
        private void migrilla()
        {
            SqlConnection con = new SqlConnection();
            con.ConnectionString = "server=(local);database=vestimenta;user=ProgM324;pwd=123456";
            SqlDataAdapter ada = new SqlDataAdapter();
            ada.SelectCommand = new SqlCommand();
            ada.SelectCommand.Connection = con;
            ada.SelectCommand.CommandText = "select * from imagenes";
            DataSet ds = new DataSet();
            ada.Fill(ds);
            dataGridView1.DataSource = ds.Tables[0];
        }
    }
}
