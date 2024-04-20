package data1700.oblig3;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RestController
public class homeController {
    @Autowired
    billettRepository rep;

    @PostMapping("/lagre")  //receives a ticket object from the client and runs a function from the repository file to save it to the db
    public void nyBillett(kinoBillett innBillett){
        rep.lagreBillett(innBillett);
    }

    @GetMapping("/hentAlle")    //makes a list of ticket objects and runs a function from the repository file to fill the list with all the tickets, and sends that list to the client
    public List<kinoBillett> hentAlle(){
        return rep.hentBilletter();
    }

    @GetMapping("/slettAlle")   //runs a function from the repository file to delete the tickets
    public void slettAlle(){
        rep.slettBilletter();
    }
}
