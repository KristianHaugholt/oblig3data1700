package data1700.oblig3;

public class kinoBillett {      //just a plain old java object for the tickets
    private  String film, fornavn, etternavn, telefonNr, epost;
    private int antall;
    public kinoBillett(String film, int antall, String fornavn, String etternavn,
                       String telefonNr, String epost){
        this.film=film;
        this.antall=antall;
        this.fornavn=fornavn;
        this.etternavn=etternavn;
        this.telefonNr=telefonNr;
        this.epost=epost;
    }
    public kinoBillett(){}

    public String getFilm(){
        return film;
    }
    public void setFilm(String film){
        this.film=film;
    }

    public int getAntall(){
        return antall;
    }
    public void setAntall(int antall){
        this.antall=antall;
    }

    public String getFornavn(){
        return fornavn;
    }
    public void setFornavn(String fornavn){
        this.fornavn=fornavn;
    }

    public String getEtternavn(){
        return etternavn;
    }
    public void setEtternavn(String etternavn){
        this.etternavn=etternavn;
    }

    public String getTelefonNr(){
        return telefonNr;
    }
    public void setTelefonNr(String telefonNr){
        this.telefonNr=telefonNr;
    }

    public String getEpost(){
        return epost;
    }
    public void setEpost(String epost){
        this.epost=epost;
    }
}
