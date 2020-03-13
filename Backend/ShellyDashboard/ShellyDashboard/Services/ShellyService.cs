using ShellyDashboard.Models;
using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using System.Threading.Tasks;

namespace ShellyDashboard.Services
{
    public class ShellyService
    {
        string cs = $"Data Source={AppDomain.CurrentDomain.BaseDirectory}/ShellyDB.db";

        public ShellyService()
        {

        }

        public List<Shelly> GetAllShellies()
        {
            List<Shelly> returnList = new List<Shelly>();

            using var con = new SQLiteConnection(cs, true);
            con.Open();

            using var cmd = new SQLiteCommand("Select * from Shellies", con);
            var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                Shelly s = new Shelly();

                s.ShellyID = reader.GetInt32(0);
                s.Name = reader.GetString(1);
                s.ConnectionState = Convert.ToBoolean(reader.GetString(2));
                s.ShellyType = reader.GetInt32(3);
                s.IP = reader.GetString(4);
                returnList.Add(s);
            }
            con.Close();
            return returnList;
        }

        public void AddShelly(Shelly shelly)
        {
            using var con = new SQLiteConnection(cs, true);
            con.Open();
            using var cmd = new SQLiteCommand($"Insert into Shellies VALUES({shelly.ShellyID}, '{shelly.Name}'), '{shelly.ConnectionState}', {shelly.ShellyType}, '{shelly.IP}'", con);
            cmd.ExecuteNonQuery();
            con.Close();
        }

        public Shelly GetShellyByID(int ID)
        {
            Shelly s = new Shelly();

            using var con = new SQLiteConnection(cs, true);
            con.Open();

            using var cmd = new SQLiteCommand($"Select * from Shellies where ID ={ID}", con);
            var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                s.ShellyID = reader.GetInt32(0);
                s.Name = reader.GetString(1);
                s.ConnectionState = Convert.ToBoolean(reader.GetString(2));
                s.ShellyType = reader.GetInt32(3);
                s.IP = reader.GetString(4);

            }
            con.Close();
            return s;
        }
    }
}
