import barraBlue from "../components/barraBlue.js";
import Container from "../layout/Container.js";
import PageHeader from "../layout/PageHeader.js";
import ServiceSection from "../layout/ServiceSection.js";

const Services = {
    template: `
    <container>
    <main>

    <page-header>Servizi</page-header>


        <!-- Service Start -->
        <service/>
        <!-- Service End -->
        <barra-blue/>
        <div class="container">
            <div class="py-5">
                <h1 class="mb-4">D.Lgs 231/01 e Responsabilità Amministrativa</h1>
                <p>
                    Il Decreto Legislativo 231/2001 ha introdotto in Italia il Sistema di Responsabilità Amministrativa dell’Ente in base alla quale qualora un soggetto, dipendente o collaboratore, operante in una società (o ente), commetta uno dei reati presupposto, a vantaggio della società stessa, questa potrà essere condannata e subire una delle sanzioni previste dallo stesso D.lgs. 231/2001. Tale responsabilità si aggiunge a quella della persona fisica che ha realizzato materialmente il fatto.<br>
                    Tra i reati presupposto rientrano azioni in molteplici ambiti, sono considerati infatti, in elenco esemplificativo non esaustivo, reati societari, indebita percezione di erogazioni da parte dello Stato o altro Ente Pubblico o Comunità Europea, concussione, corruzione, frode informatica, trattamento illecito di dati, impiego di lavoratori stranieri irregolari, omicidio colposo e lesioni gravi o gravissime commessi in violazione delle norme antinfortunistiche e sulla tutela dell’igiene e della salute sul lavoro, reati ambientali, riciclaggio e autoriciclaggio, frodi IVA e reati tributari.<br>
                    Per essere esonerata dalla responsabilità amministrativa, la società deve dimostrare di aver adottato ed efficacemente attuato, prima della commissione del reato, un modello di organizzazione, gestione e controllo idonei a prevenire reati della specie di quello verificatosi. Le nostre competenze e attività in materia includono:
                <p><i class="fa fa-check text-primary me-3"></i>l’identificazione dei rischi potenziali e la mappa delle
                    attività a rischio;</p>
                <p><i class="fa fa-check text-primary me-3"></i>la creazione del modello organizzativo (parte generale
                    più parte speciale) e la definizione del codice etico;</p>
                <p><i class="fa fa-check text-primary me-3"></i>la predisposizione delle procedure interne specifiche
                    per i diversi processi aziendali;</p>
                <p><i class="fa fa-check text-primary me-3"></i>l’organizzazione del sistema di deleghe e
                    responsabilità;</p>
                <p><i class="fa fa-check text-primary me-3"></i>la definizione del sistema disciplinare;</p>
                <p><i class="fa fa-check text-primary me-3"></i>la formazione e informazione del personale;</p>
                <p><i class="fa fa-check text-primary me-3"></i>l’attività in qualità di Organismo di Vigilanza.</p>
                </p>
                <p id="privicy"></p>
            </div>
            <div class="py-5">
                <h1 class="mb-4">Privacy</h1>
                <p>
                    La normativa attualmente vigente in materia di trattamento dati è il Regolamento Europeo numero 679 del 2016, entrato in vigore in Italia nel maggio 2018, accompagnato da:
                <p><i class="fa fa-check text-primary me-3"></i>Decreto Legislativo n. 196 del 2003, al quale il GDPR si
                    è sovrapposto senza eliminarlo;</p>
                <p><i class="fa fa-check text-primary me-3"></i>Decreto legislativo n. 181 del 2018, che modifica il
                    decreto 196;</p>
                <p><i class="fa fa-check text-primary me-3"></i>Disciplina del Whistleblowing del 2017;</p>
                <p><i class="fa fa-check text-primary me-3"></i>Cookie Law (Direttiva europea del 2002, recepita nel
                    2014);</p>
                <p><i class="fa fa-check text-primary me-3"></i>Linee Guida del Garante per la protezione dei dati.</p>
                Trattare correttamente i dati è un adempimento necessario durante lo svolgimento di tutte le attività lavorative, con doveri da assolvere nei confronti di interessati, dipendenti, collaboratori, clienti. Deve essere tenuto presente durante l’operatività ordinaria come durante specifiche operazioni e campi operativi.<br> Le nostre competenze e attività in materia ci consentono di affrontare le problematiche ordinarie in ogni settore lavorativo, compresa l’area medico sanitaria, e in materia di Whistleblowing, Dossier sanitario, Videosorveglianza, Firma grafometrica, Siti Web, Newsletter, Biometria, Informatica e Sicurezza.
                </p>

                <p id="audit"></p>
            </div>
            <div class="py-5">

                <h1 class="mb-4">Audit ISO 9001</h1>
                <p>I sistemi di gestione qualità basati sullo standard ISO 9001 consentono alle aziende di analizzare il contesto (area geografica, mercato, concorrenza) in cui si opera, valutare le parti interessate (all’interno e all’esterno) e le loro esigenze, valutare i rischi da affrontare e le opportunità da sfruttare, controllare i costi e l’ottimale utilizzo delle risorse, migliorare la propria capacità di controllare i processi.<br>
                    Ciò porta molti vantaggi alle aziende che operano nel privato e diventa spesso necessaio quando le attività da svolgere sono connesse ad autorizzazioni e contratti con enti della pubblica amministrazione, allo scopo di poter garantire adeguati livelli di qualità nell’erogazione dei servizi e di fornirne prova tramite documentazione ed evidenze, rendendo possibile l’applicazione pratica delle innumerevoli normative che cadono dall’alto in capo all’ente. Per realizzare nella pratica i concetti di rintracciabilità e produzione di evidenze permettendo all’ente di dimostrare di aver adempiuto ad ogni richiesta che la normativa impone, l’esecuzione di audit periodici e la continuità nella gestione del sistema sono elementi fondamentali.<br>
                    Le nostre competenze e attività in materia ci consentono di affiancare l’azienda nel mantenere attivo e funzionale il sistema di gestione qualità eseguendo aggiornamenti, monitoraggio e audit.
                </p>
                <p id="licensing"></p>
            </div>
            <div class="py-5">
                <h1 class="mb-4">Licensing</h1>
                <p>Redazione di licenze in ambito proprietario e open source, valutazione testi di licenza in italiano
                    ed inglese.</p>
            </div>
        </div>
        </main>
    </container>
    `,
    components:{
        container: Container,
        "page-header": PageHeader,
        service: ServiceSection,
        "barra-blue": barraBlue
    },
    mounted() {
        document.getElementById("mn3").classList.add('active');
    },
    beforeUnmount() {
        document.getElementById("mn3").classList.remove('active');
    },
}

export default Services;

