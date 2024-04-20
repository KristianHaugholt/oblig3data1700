package data1700.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class billettRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(kinoBillett kinobillett){  //adds the ticket object to the db
        String sql = "INSERT INTO Kinobillett(film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, kinobillett.getFilm(), kinobillett.getAntall(), kinobillett.getFornavn(), kinobillett.getEtternavn(),
                kinobillett.getTelefonNr(), kinobillett.getEpost());
    }

    public List<kinoBillett> hentBilletter(){   //returns a list of all the tickets from the db ordered by surnames
        String sql = "SELECT * FROM Kinobillett ORDER BY etternavn";
        List<kinoBillett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(kinoBillett.class));
        return alleBilletter;
    }

    public  void slettBilletter(){  //deletes all the ticket elements from the db
        String sql = "DELETE FROM Kinobillett";
        db.update(sql);
    }
}