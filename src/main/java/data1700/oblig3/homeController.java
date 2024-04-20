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

    @PostMapping("/lagre")
    public void nyBillett(kinoBillett innBillett){
        rep.lagreBillett(innBillett);
    }

    @GetMapping("/hentAlle")
    public List<kinoBillett> hentAlle(){
        return rep.hentBilletter();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettBilletter();
    }
}
