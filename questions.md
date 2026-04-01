# Quiz otázky

## Docker

### Co je Docker a k čemu se používá?
- [x] Docker je platforma pro vytváření, distribuci a spouštění kontejnerizovaných aplikací. Umožňuje snadné balení aplikací a jejich nasazení do různých prostředí.
- [ ] Docker je programovací jazyk pro webové aplikace
- [ ] Docker je databázový systém
- [ ] N/A

### Jaký je rozdíl mezi Docker Image a Docker Container?
- [x] Docker Image je neproměnný soubor obsahující popis všeho potřebného k provozu aplikace. (Docker) Container je instance tohoto image/obrazu, která běží jako vlastní izolovaný proces.
- [ ] Image a Container jsou totéž
- [ ] Container je šablona pro vytvoření Image
- [ ] N/A

### Jak funguje Docker Compose?
- [x] Docker Compose umožňuje definovat a spravovat multi-kontejnerové aplikace (bězí více instancí) pomocí YAML souboru, v němžcjezskzo popsáno víc instanci, je možné zde detailněji popisovat i networking či správa disku.
- [ ] Docker Compose je GUI nástroj pro Docker
- [ ] Docker Compose slouží pouze pro testování
- [ ] N/A

### Jaký je rozdíl mezi Dockerfile a docker-compose.yml?
- [x] Dockerfile definuje, jak se sestaví image kontejneru, zatímco docker-compose.yml slouží ke spuštění a konfiguraci více kontejnerů najednou.
- [ ] Dockerfile a docker-compose.yml jsou totéž
- [ ] docker-compose.yml definuje sestavení image
- [ ] N/A

### Jak Docker spravuje sítě a jaké typy sítí podporuje?
- [x] Docker podporuje bridge, host, overlay a none sítě. Spravuje sítě pomocí Docker Network API.
- [ ] Docker podporuje pouze bridge síť
- [ ] Docker nepodporuje vlastní sítě
- [ ] N/A

### Jak vytvořit vícevrstvý Docker Image efektivně?
- [x] Použitím multi-stage buildů, aby se minimalizovala velikost výsledného image.
- [ ] Vytvořením více Dockerfile souborů
- [ ] Multi-stage buildy nejsou v Dockeru podporovány
- [ ] N/A

### Jak funguje Docker Volumes a v čem se liší od Bind Mounts?
- [x] Volumes jsou spravovány Dockerem a umožňují trvalé uložení dat, zatímco Bind Mounts mapují složku na hostiteli.
- [ ] Volumes a Bind Mounts jsou totéž
- [ ] Bind Mounts jsou spravovány Dockerem
- [ ] N/A

### Jak zajistit bezpečnost v Docker kontejnerech?
- [x] Použitím minimálních image, neprivilegovaných uživatelů a skenováním bezpečnostních chyb.
- [ ] Docker kontejnery jsou automaticky bezpečné
- [ ] Bezpečnost v Dockeru nelze zajistit
- [ ] N/A

### Co je Docker Overlay Network?
- [x] Je to síť pro komunikaci mezi kontejnery běžícími na různých hostitelích ve Swarm clusteru.
- [ ] Overlay Network je typ lokální sítě
- [ ] Overlay Network slouží pouze pro testování
- [ ] N/A

### Jak Docker provádí izolaci kontejnerů?
- [x] Pomocí kernelových mechanismů jako jsou namespaces (PIDs, NET, MNT atd. …) a cgroups(organizují procesy do hierarchických skupin) a třeba UnionFS.
- [ ] Docker používá virtuální stroje pro izolaci
- [ ] Docker neprovádí izolaci kontejnerů
- [ ] N/A

### Jak můžete snížit velikost Docker Image?
- [x] Použitím menších base images, odstraněním nepotřebných souborů a minimalizací vrstev.
- [ ] Velikost Docker Image nelze snížit
- [ ] Přidáním více vrstev
- [ ] N/A

### Jak spravovat tajné klíče v Docker kontejnerech?
- [x] Použitím Docker Secrets nebo prostřednictvím environment variables s bezpečným přístupem.
- [ ] Tajné klíče se ukládají přímo do Dockerfile
- [ ] Docker nepodporuje správu tajných klíčů
- [ ] N/A

### Co je Docker BuildKit a proč se používá?
- [x] BuildKit je vylepšená verze Docker Build systému, která zlepšuje rychlost, bezpečnost a umožňuje paralelizaci.
- [ ] BuildKit je GUI nástroj pro Docker
- [ ] BuildKit je zastaralá verze Docker Build
- [ ] N/A

### Jak Docker řeší problémy se závislostmi mezi kontejnery?
- [x] Pomocí Docker Compose a definice služeb v depends_on.
- [ ] Docker neřeší závislosti mezi kontejnery
- [ ] Závislosti se definují v Dockerfile
- [ ] N/A

### Jaké jsou výhody použití Docker Swarm oproti Kubernetes?
- [x] Docker Swarm je jednodušší na nasazení, ale méně robustní než Kubernetes.
- [ ] Docker Swarm je robustnější než Kubernetes
- [ ] Docker Swarm a Kubernetes jsou totéž
- [ ] N/A

### Jak monitorovat kontejnery v Dockeru?
- [x] Pomocí nástrojů jako Prometheus, Grafana, cAdvisor nebo Docker stats.
- [ ] Kontejnery v Dockeru nelze monitorovat
- [ ] Pouze pomocí Docker logs
- [ ] N/A

### Co znamená koncept "immutable infrastructure" v Dockeru?
- [x] Znamená, že kontejnery by měly být považovány za neměnné a každá změna vyžaduje vytvoření nové image.
- [ ] Kontejnery lze libovolně měnit za běhu
- [ ] Immutable infrastructure se v Dockeru nepoužívá
- [ ] N/A

### Jak funguje Docker Multi-Stage Build?
- [x] Umožňuje sestavení více fází v Dockerfile, aby se minimalizovala velikost finálního image.
- [ ] Multi-Stage Build vytváří více kontejnerů najednou
- [ ] Multi-Stage Build není v Dockeru podporován
- [ ] N/A

### Jak spustit dočasný kontejner v Dockeru?
- [x] Použitím docker run --rm pro automatické odstranění po ukončení.
- [ ] Dočasné kontejnery nelze v Dockeru spustit
- [ ] Použitím docker run --temp
- [ ] N/A

### Jak analyzovat problémy s kontejnery v Dockeru?
- [x] Pomocí docker logs, docker inspect a docker stats.
- [ ] Problémy s kontejnery nelze analyzovat
- [ ] Pouze restartováním kontejneru
- [ ] N/A

### Jak lze omezit zdroje (CPU, RAM) pro běžící Docker kontejner?
- [x] Použitím parametrů --memory a --cpus při spouštění kontejneru.
- [ ] Zdroje kontejnerů nelze omezit
- [ ] Pomocí Dockerfile pouze
- [ ] N/A

### Jak vytvořit vlastní síť v Dockeru?
- [x] Použitím příkazu docker network create.
- [ ] Vlastní sítě nelze v Dockeru vytvořit
- [ ] Pomocí Dockerfile
- [ ] N/A

### Jak nasadit více instancí stejného kontejneru v Docker Compose?
- [x] Definováním replicas v docker-compose.yml.
- [ ] Více instancí nelze nasadit
- [ ] Vytvořením více Dockerfile souborů
- [ ] N/A

### Jaký je rozdíl mezi ENTRYPOINT a CMD v Dockerfile?
- [x] CMD slouží jako výchozí příkaz a argumenty, které můžeš přepsat při spuštění kontejneru. ENTRYPOINT definuje, co se má vždy spustit, ať už dodáš další příkaz nebo ne.
- [ ] ENTRYPOINT a CMD jsou totéž
- [ ] CMD nelze přepsat při spuštění
- [ ] N/A

### Jak funguje Docker Healthcheck?
- [x] Umožňuje definovat zdravotní stav kontejneru pomocí HEALTHCHECK v Dockerfile.
- [ ] Docker Healthcheck není podporován
- [ ] Healthcheck se definuje pouze v docker-compose.yml
- [ ] N/A

### Jak vymazat nepoužívané Docker Images?
- [x] Použitím docker image prune.
- [ ] Nepoužívané images nelze vymazat
- [ ] Pomocí docker delete images
- [ ] N/A

### Jak vylistovat pouze běžící kontejnery?
- [x] Pomocí docker ps.
- [ ] Pomocí docker list running
- [ ] Pomocí docker containers
- [ ] N/A

### Jak Docker řeší závislosti mezi kontejnery v síti?
- [x] Pomocí interních DNS služeb v rámci docker network.
- [ ] Docker neřeší závislosti v síti
- [ ] Pouze pomocí IP adres
- [ ] N/A

### Jak vytvořit více kontejnerů v jednom Docker Compose souboru?
- [x] Definováním více služeb (services) v docker-compose.yml.
- [ ] Více kontejnerů nelze definovat v jednom souboru
- [ ] Vytvořením více docker-compose souborů
- [ ] N/A

### Jak funguje Docker Build Cache?
- [x] Docker znovu nepřekompilovává vrstvy, které se nezměnily.
- [ ] Docker Build Cache neexistuje
- [ ] Cache se vždy invaliduje
- [ ] N/A

### Jak bezpečně spouštět kontejnery s rootless Dockerem?
- [x] Použitím rootless režimu, který běží bez oprávnění superuživatele.
- [ ] Rootless Docker neexistuje
- [ ] Kontejnery vždy vyžadují root oprávnění
- [ ] N/A

### Jak vytvořit tajný soubor v Docker Swarm?
- [x] Pomocí docker secret create.
- [ ] Tajné soubory nelze v Docker Swarm vytvořit
- [ ] Pomocí docker file secret
- [ ] N/A

### Jak povolit logging driver v Dockeru?
- [x] Použitím --log-driver parametru při spuštění kontejneru.
- [ ] Logging driver nelze změnit
- [ ] Pomocí Dockerfile pouze
- [ ] N/A

### Jak funguje Docker Context?
- [x] Docker Context umožňuje přepínání mezi různými Docker Daemony.
- [ ] Docker Context slouží pro správu images
- [ ] Docker Context neexistuje
- [ ] N/A

### Jak provést rollback kontejnerové aplikace?
- [x] Použitím docker service update --rollback v Docker Swarm.
- [ ] Rollback v Dockeru není možný
- [ ] Pomocí docker rollback
- [ ] N/A

### Co jsou Docker Labels a k čemu se používají?
- [x] Slouží k přidávání metadat k objektům v Dockeru.
- [ ] Labels jsou názvy kontejnerů
- [ ] Labels slouží pro logování
- [ ] N/A

### Jak bezpečně ukládat citlivé údaje v Docker Compose?
- [x] Použitím .env souborů nebo Docker Secrets.
- [ ] Citlivé údaje se ukládají přímo do docker-compose.yml
- [ ] Docker Compose nepodporuje citlivé údaje
- [ ] N/A

### Jak zobrazit detaily o běžícím kontejneru?
- [x] Pomocí docker inspect.
- [ ] Pomocí docker details
- [ ] Detaily kontejnerů nelze zobrazit
- [ ] N/A

### Jak změnit konfiguraci běžícího kontejneru?
- [x] Je nutné kontejner restartovat s novými parametry.
- [ ] Konfigurace se mění za běhu automaticky
- [ ] Pomocí docker config update
- [ ] N/A

### Jak z Docker kontejneru odstranit nepotřebné vrstvy?
- [x] Použitím docker image prune nebo optimalizací Dockerfile.
- [ ] Vrstvy nelze odstranit
- [ ] Pomocí docker layer remove
- [ ] N/A

### Jak vytvořit image pouze pro vývojové prostředí?
- [x] Použitím Dockerfile.dev a docker build -f Dockerfile.dev.
- [ ] Vývojové images nelze vytvořit
- [ ] Pomocí docker build --dev
- [ ] N/A

### Jak funguje Docker Security Scanning?
- [x] Prohledává image na známé bezpečnostní chyby.
- [ ] Docker Security Scanning neexistuje
- [ ] Skenuje pouze kontejnery za běhu
- [ ] N/A

### Jak Docker řeší problémy se souběžností více kontejnerů?
- [x] Pomocí orchestrátorů jako Kubernetes nebo Swarm.
- [ ] Docker neřeší souběžnost
- [ ] Kontejnery nemohou běžet souběžně
- [ ] N/A

### Jak vytvořit lightweight Docker image?
- [x] Použitím Alpine Linux jako základního image.
- [ ] Lightweight images nelze vytvořit
- [ ] Pomocí docker build --light
- [ ] N/A

### Jak zobrazit historii změn v Docker image?
- [x] Pomocí docker history.
- [ ] Historie změn není dostupná
- [ ] Pomocí docker image log
- [ ] N/A

### Jak restartovat kontejner při selhání?
- [x] Použitím --restart flagu při docker run.
- [ ] Kontejnery nelze automaticky restartovat
- [ ] Pomocí docker auto-restart
- [ ] N/A

### Jaký je rozdíl mezi soft limit a hard limit u Docker resource constraints?
- [x] Soft limit je doporučená hodnota, hard limit je maximální povolená hodnota.
- [ ] Soft limit a hard limit jsou totéž
- [ ] Docker nepodporuje resource constraints
- [ ] N/A

### Jak vypnout a smazat všechny kontejnery najednou?
- [x] Použitím docker rm -f $(docker ps -aq).
- [ ] Všechny kontejnery nelze smazat najednou
- [ ] Pomocí docker delete all
- [ ] N/A

### Jak zajistit audit Docker událostí?
- [x] Pomocí docker events.
- [ ] Audit Docker událostí není možný
- [ ] Pomocí docker audit log
- [ ] N/A

### Jak Docker zvládá verze image a tagování?
- [x] Pomocí docker tag a docker push.
- [ ] Docker nepodporuje tagování
- [ ] Pomocí docker version set
- [ ] N/A

## Kubernetes

### Co je Kubernetes a jaké jsou jeho hlavní součásti?
- [x] Kubernetes je platforma pro orchestraci kontejnerů, která umožňuje automatizaci nasazení, škálování a správu aplikací.
- [ ] Kubernetes je programovací jazyk
- [ ] Kubernetes je databázový systém
- [ ] N/A

### Jaký je rozdíl mezi Podem a Node?
- [x] Pod je nejmenší nasaditelná jednotka v Kubernetes obsahující jeden nebo více kontejnerů. Node je fyzický nebo virtuální stroj, který hostuje Pody.
- [ ] Pod a Node jsou totéž
- [ ] Node je kontejner uvnitř Podu
- [ ] N/A

### Co je kubelet a jakou má roli?
- [x] Kubelet je agent běžící na každém Node, který spravuje a monitoruje Pody.
- [ ] Kubelet je GUI nástroj pro Kubernetes
- [ ] Kubelet je typ kontejneru
- [ ] N/A

### Jak funguje Kubernetes Scheduler?
- [x] Scheduler rozhoduje, na kterém Node bude nový Pod spuštěn na základě dostupných zdrojů.
- [ ] Scheduler slouží pro plánování záloh
- [ ] Scheduler je typ kontejneru
- [ ] N/A

### Jaký je rozdíl mezi Deployment a StatefulSet?
- [x] Deployment se používá pro bezstavové aplikace, zatímco StatefulSet pro aplikace, které vyžadují perzistentní identitu.
- [ ] Deployment a StatefulSet jsou totéž
- [ ] StatefulSet je pro bezstavové aplikace
- [ ] N/A

### Co je Kubernetes Namespace a k čemu se používá?
- [x] Namespace umožňuje izolaci prostředků v Kubernetes clusteru.
- [ ] Namespace je typ kontejneru
- [ ] Namespace slouží pro logování
- [ ] N/A

### Jak se v Kubernetes definuje Health Check?
- [x] Pomocí livenessProbe a readinessProbe v YAML konfiguraci.
- [ ] Health Check se v Kubernetes nedefinuje
- [ ] Pomocí healthCheck příkazu
- [ ] N/A

### Co je Kubernetes Service a jaké typy existují?
- [x] Kubernetes Service umožňuje síťovou komunikaci mezi Pody. Typy: ClusterIP, NodePort, LoadBalancer a ExternalName.
- [ ] Service je typ kontejneru
- [ ] Kubernetes má pouze jeden typ Service
- [ ] N/A

### Jaký je rozdíl mezi ConfigMap a Secret?
- [x] ConfigMap slouží k uchování nekryptovaných konfiguračních dat, Secret obsahuje kryptovaná (base64) citlivá data jako hesla.
- [ ] ConfigMap a Secret jsou totéž
- [ ] Secret slouží pro nekryptovaná data
- [ ] N/A

### Jaké jsou způsoby škálování aplikací v Kubernetes?
- [x] Manuální škálování (kubectl scale), automatické škálování (HPA, VPA) a cluster autoscaler.
- [ ] Kubernetes nepodporuje škálování
- [ ] Pouze manuální škálování
- [ ] N/A

### Jak Kubernetes spravuje persistentní úložiště?
- [x] Pomocí PersistentVolume (PV) a PersistentVolumeClaim (PVC).
- [ ] Kubernetes nepodporuje persistentní úložiště
- [ ] Pomocí Docker Volumes pouze
- [ ] N/A

### Jak Kubernetes zajišťuje bezpečnost komunikace mezi komponentami?
- [x] Použitím RBAC, Network Policies a TLS certifikátů.
- [ ] Kubernetes nezajišťuje bezpečnost
- [ ] Pouze pomocí hesel
- [ ] N/A

### Co je Kubernetes Operator?
- [x] Operator rozšiřuje funkcionalitu Kubernetes a umožňuje automatizaci složitých operací.
- [ ] Operator je typ kontejneru
- [ ] Operator je GUI nástroj
- [ ] N/A

### Jak Kubernetes zvládá rolling updates?
- [x] Pomocí Deployment strategií, jako je RollingUpdate a Recreate.
- [ ] Kubernetes nepodporuje rolling updates
- [ ] Pouze restartováním všech Podů najednou
- [ ] N/A

### Jak obnovit nefunkční Pod v Kubernetes?
- [x] Kubelet automaticky restartuje nefunkční Pody.
- [ ] Nefunkční Pody nelze obnovit
- [ ] Pouze manuálním restartem
- [ ] N/A

### Jak funguje Kubernetes Ingress?
- [x] Ingress umožňuje routování HTTP/S provozu k vnitřním službám.
- [ ] Ingress je typ kontejneru
- [ ] Ingress slouží pro logování
- [ ] N/A

### Jak monitorovat Kubernetes cluster?
- [x] Pomocí Prometheus (Node-exporters), Grafana, ELK stacku a Kubernetes Metrics Server.
- [ ] Kubernetes cluster nelze monitorovat
- [ ] Pouze pomocí kubectl logs
- [ ] N/A

### Jaké jsou hlavní výhody použití Helm Charts?
- [x] Helm Charts usnadňují správu a nasazení aplikací v Kubernetes.
- [ ] Helm Charts jsou zastaralé
- [ ] Helm Charts slouží pouze pro testování
- [ ] N/A

### Jak spravovat tajná data v Kubernetes?
- [x] Pomocí Secrets a šifrování v etcd.
- [ ] Tajná data se ukládají do ConfigMap
- [ ] Kubernetes nepodporuje tajná data
- [ ] N/A

### Co je Kubernetes DaemonSet?
- [x] DaemonSet zajišťuje, že určitý Pod běží na každém Node.
- [ ] DaemonSet je typ Service
- [ ] DaemonSet slouží pro logování
- [ ] N/A

### Jak Kubernetes řídí přístup k API serveru?
- [x] Pomocí Role-Based Access Control (RBAC) a autentizačních mechanismů.
- [ ] Kubernetes neřídí přístup k API
- [ ] Pouze pomocí hesel
- [ ] N/A

### Co je Kubernetes Custom Resource Definition (CRD)?
- [x] CRD umožňuje rozšíření Kubernetes o vlastní objekty.
- [ ] CRD je typ kontejneru
- [ ] CRD slouží pro logování
- [ ] N/A

### Jaký je rozdíl mezi ReplicaSet a Deployment?
- [x] Deployment spravuje ReplicaSety a umožňuje provádět aktualizace.
- [ ] ReplicaSet a Deployment jsou totéž
- [ ] ReplicaSet spravuje Deploymenty
- [ ] N/A

### Jak lze škálovat v Kubernetes?
- [x] V Kubernetes se dá škálovat tak, že přidáš víc podů, zvýšíš jejich výkon, nebo přidáš nové servery do clusteru. Obecně buď ručně (definici podů v ReplicaSetu), nebo automaticky (HPA, VPA).
- [ ] Kubernetes nepodporuje škálování
- [ ] Pouze vertikálně
- [ ] N/A

### Jak Kubernetes provádí zálohování a obnovu dat?
- [x] Pomocí snapshotů Persistent Volumes nebo externích řešení jako Velero.
- [ ] Kubernetes nepodporuje zálohování
- [ ] Pouze manuálním kopírováním souborů
- [ ] N/A

### Jak se konfiguruje Kubernetes API Server?
- [x] Konfigurací parametrů v kube-apiserver.
- [ ] API Server nelze konfigurovat
- [ ] Pomocí Docker Compose
- [ ] N/A

### Co je Kubernetes Pod Disruption Budget (PDB)?
- [x] Umožňuje definovat maximální počet replik, které mohou být současně vypnuty.
- [ ] PDB je typ kontejneru
- [ ] PDB slouží pro logování
- [ ] N/A

### Jak Kubernetes spravuje konfigurace pro aplikace?
- [x] Pomocí ConfigMaps a Secrets.
- [ ] Konfigurace se ukládají do Dockerfile
- [ ] Kubernetes nepodporuje konfigurace
- [ ] N/A

### Co je Kubernetes Network Policy?
- [x] Definuje pravidla síťové komunikace mezi Pody.
- [ ] Network Policy je typ kontejneru
- [ ] Network Policy slouží pro logování
- [ ] N/A

### Jak Kubernetes spravuje závislosti mezi Pody?
- [x] Použitím Init Containers a Affinity/Anti-Affinity pravidel.
- [ ] Kubernetes nespravuje závislosti
- [ ] Pomocí depends_on pouze
- [ ] N/A

### Jak lze sledovat logy v Kubernetes?
- [x] Pomocí kubectl logs a nástrojů jako Fluentd nebo Loki.
- [ ] Logy v Kubernetes nelze sledovat
- [ ] Pouze pomocí docker logs
- [ ] N/A

### Jak Kubernetes řeší vysokou dostupnost?
- [x] Použitím multi-master architektury a load balanceru.
- [ ] Kubernetes nepodporuje vysokou dostupnost
- [ ] Pouze jedním master nodem
- [ ] N/A

### Jak nasadit Stateful aplikaci v Kubernetes?
- [x] Použitím StatefulSet namísto Deploymentu.
- [ ] Stateful aplikace nelze nasadit
- [ ] Pomocí DaemonSet
- [ ] N/A

### Jak funguje Kubernetes Job a CronJob?
- [x] Job spouští úlohy s jednorázovým vykonáním, CronJob plánuje periodické úlohy.
- [ ] Job a CronJob jsou totéž
- [ ] CronJob spouští jednorázové úlohy
- [ ] N/A

### Jak Kubernetes zpracovává výpadek Node?
- [x] Node Controller automaticky přesouvá Pody na jiný dostupný Node.
- [ ] Výpadek Node není řešen
- [ ] Pody se ztratí navždy
- [ ] N/A

### Co je Kubernetes Eviction Policy?
- [x] Mechanismus pro odstranění Podů při přetížení uzlů.
- [ ] Eviction Policy je typ Service
- [ ] Eviction Policy slouží pro logování
- [ ] N/A

### Jaký je rozdíl mezi LoadBalancer a Ingress?
- [x] LoadBalancer vystavuje jednotlivé služby, zatímco Ingress umožňuje směrování na základě URL.
- [ ] LoadBalancer a Ingress jsou totéž
- [ ] Ingress vystavuje jednotlivé služby
- [ ] N/A

### Jak funguje Kubernetes Admission Controller?
- [x] Provádí validaci a mutaci požadavků na API server.
- [ ] Admission Controller je typ kontejneru
- [ ] Admission Controller slouží pro logování
- [ ] N/A

### Jak spravovat konfigurace více prostředí v Kubernetes?
- [x] Použitím různých Namespace nebo Helm Values.
- [ ] Více prostředí nelze spravovat
- [ ] Pouze jedním ConfigMap
- [ ] N/A

### Jak Kubernetes spravuje síťovou komunikaci mezi kontejnery?
- [x] Pomocí CNI pluginů jako Calico, Flannel nebo Cilium.
- [ ] Kubernetes nespravuje síťovou komunikaci
- [ ] Pouze pomocí Docker network
- [ ] N/A

### Jaký je rozdíl mezi Taint a Toleration v Kubernetes?
- [x] Taint brání běhu Podů na Nodech, pokud nemají odpovídající Toleration.
- [ ] Taint a Toleration jsou totéž
- [ ] Toleration brání běhu Podů
- [ ] N/A

### Jak Kubernetes implementuje Service Discovery?
- [x] Pomocí DNS služby CoreDNS a environment variables.
- [ ] Kubernetes nepodporuje Service Discovery
- [ ] Pouze pomocí IP adres
- [ ] N/A

### Jak nakonfigurovat Kubernetes audit logging?
- [x] Použitím audit-policy.yaml a nastavení kube-apiserver.
- [ ] Audit logging nelze nakonfigurovat
- [ ] Pomocí kubectl audit
- [ ] N/A

### Co je Kubernetes Federation?
- [x] Umožňuje správu více clusterů z jednoho rozhraní.
- [ ] Federation je typ kontejneru
- [ ] Federation slouží pro logování
- [ ] N/A

### Jak funguje Kubernetes Horizontal Pod Autoscaler (HPA)?
- [x] Dynamicky upravuje počet Podů na základě metrik CPU nebo paměti.
- [ ] HPA je typ kontejneru
- [ ] HPA škáluje pouze vertikálně
- [ ] N/A

### Jak Kubernetes řídí životní cyklus Podů?
- [x] Pomocí stavů Pending, Running, Succeeded a Failed.
- [ ] Kubernetes neřídí životní cyklus
- [ ] Pouze pomocí restart policy
- [ ] N/A

### Jaké jsou možnosti autentizace v Kubernetes?
- [x] X.509 certifikáty, tokeny a OpenID Connect.
- [ ] Kubernetes nepodporuje autentizaci
- [ ] Pouze pomocí hesel
- [ ] N/A

### Jak Kubernetes spravuje zdroje na úrovni Node?
- [x] Pomocí cgroups a resource requests/limits v YAML definicích.
- [ ] Kubernetes nespravuje zdroje
- [ ] Pouze pomocí Docker limits
- [ ] N/A

### Jak zabezpečit Kubernetes cluster?
- [x] Použitím RBAC, Network Policies a auditování.
- [ ] Kubernetes cluster nelze zabezpečit
- [ ] Pouze pomocí firewallu
- [ ] N/A

### Jak zálohovat a obnovit Kubernetes etcd databázi?
- [x] Pomocí etcdctl snapshot save a restore příkazů.
- [ ] etcd databázi nelze zálohovat
- [ ] Pomocí kubectl backup
- [ ] N/A

## Spring Core

### Co je Spring Framework a proč se používá?
- [x] Spring je framework pro vývoj Java aplikací, který poskytuje podporu pro dependency injection, transakce, webové aplikace a další.
- [ ] Spring je databázový systém pro ukládání dat
- [ ] Spring je programovací jazyk založený na Javě
- [ ] N/A

### Jak funguje Dependency Injection v Springu?
- [x] Dependency Injection umožňuje vkládání závislostí do tříd bez pevné vazby mezi nimi.
- [ ] Dependency Injection vyžaduje ruční vytváření všech objektů
- [ ] Dependency Injection je způsob importování knihoven do projektu
- [ ] N/A

### Jaký je rozdíl mezi @Component, @Service a @Repository?
- [x] @Component je obecná anotace pro Spring beany, @Service označuje servisní třídy a @Repository je určeno pro datové vrstvy a spring překládá výjimky datových konektorů.
- [ ] Všechny tři anotace jsou identické a zaměnitelné
- [ ] @Component je pouze pro testovací účely
- [ ] N/A

### Jak funguje Spring Bean Lifecycle?
- [x] Spring Bean prochází fázemi instanciace, dependency injection, konfigurace, inicializace (init), usage a zničení. (@PostContruct, @PreDestroy atd. …)
- [ ] Spring Bean má pouze dvě fáze: vytvoření a zničení
- [ ] Životní cyklus beanu řídí programátor manuálně
- [ ] N/A

### Jak Spring spravuje transakce?
- [x] Pomocí anotace @Transactional a platformy Spring Transaction Management. (dodržuje ACID). Pod kapotou je hodně AOP :-) (existují i DataSourceTransactionManager, JpaTransactionManager, HibernateTransactionManager)
- [ ] Spring nepodporuje správu transakcí
- [ ] Transakce se v Springu řeší pomocí synchronized bloků
- [ ] N/A

### Jaký je rozdíl mezi singleton a prototype scope u Spring beanů?
- [x] Singleton znamená jednu instanci beanu na kontext, prototype vytváří novou instanci při každém vyžádání.
- [ ] Singleton vytváří novou instanci při každém volání
- [ ] Prototype scope není v Springu podporován
- [ ] N/A

### Jaký je rozdíl mezi ApplicationContext a BeanFactory?
- [x] ApplicationContext rozšiřuje BeanFactory o pokročilé funkce jako event handling a mezinárodní podporu.
- [ ] BeanFactory je novější a má více funkcí než ApplicationContext
- [ ] ApplicationContext a BeanFactory jsou identické
- [ ] N/A

### Jak Spring řeší aspektově orientované programování (AOP)?
- [x] Použitím @Aspect a @Around/@Before/@After anotací.
- [ ] AOP není v Springu podporováno
- [ ] AOP se řeší pomocí dědičnosti tříd
- [ ] N/A

### Jaký je rozdíl mezi @Autowired a @Inject?
- [x] @Autowired je specifická pro Spring, @Inject pochází z Java EE a je kompatibilní se standardní Java Dependency Injection.
- [ ] @Inject je specifická pro Spring a @Autowired je z Java EE
- [ ] @Autowired a @Inject nelze použít společně v jednom projektu
- [ ] N/A

### Jak Spring řeší správu konfigurací?
- [x] Pomocí @PropertySource a externích konfiguračních souborů jako application.properties.
- [ ] Konfigurace se definují pouze v Java kódu
- [ ] Spring nepodporuje externí konfigurace
- [ ] N/A

### Co je Spring Profiles a k čemu slouží?
- [x] Umožňuje definovat různé konfigurace pro různé prostředí (např. dev, prod).
- [ ] Spring Profiles slouží pro správu uživatelských profilů v aplikaci
- [ ] Profiles jsou způsob logování v Springu
- [ ] N/A

### Jak Spring podporuje testování?
- [x] Pomocí @SpringBootTest, @MockBean a @WebMvcTest.
- [ ] Spring neposkytuje podporu pro testování
- [ ] Testování se provádí pouze pomocí JUnit bez integrace se Springem
- [ ] N/A

### Jak funguje Spring Context Refresh?
- [x] Umožňuje opětovné načtení kontextu aplikace bez restartu celé aplikace.
- [ ] Context Refresh vyžaduje restart aplikace
- [ ] Spring Context nelze refreshovat
- [ ] N/A

### Jak Spring řeší bezpečnost aplikací?
- [x] Pomocí Spring Security, která umožňuje autentizaci a autorizaci.
- [ ] Bezpečnost se v Springu řeší pomocí @Secure anotace na main metodě
- [ ] Spring neposkytuje žádné bezpečnostní funkce
- [ ] N/A

### Jak funguje Event Handling ve Springu?
- [x] Pomocí @EventListener a ApplicationEventPublisher.
- [ ] Event Handling vyžaduje použití externích knihoven
- [ ] Spring nepodporuje events
- [ ] N/A

### Jak implementovat REST API pomocí Springu?
- [x] Použitím @RestController a @RequestMapping a dále pak pro jednotlivé metodyy jako @GetMapping @PostMapping @PutMapping atp.).
- [ ] REST API se v Springu implementuje pomocí Servletů
- [ ] Spring nepodporuje REST API
- [ ] N/A

### Co je Spring Data JPA a jak funguje?
- [x] Je to rozšíření JPA(@Entity, @Id, @OneToMany…), které usnadňuje práci s databázemi pomocí Spring repository. Dotazy lze zapsat pomocí @Query (JpaRepository dědění). Spring Data umí generovat sql na základě názvu metody. Hibernate je taky JPA
- [ ] Spring Data JPA je framework pro NoSQL databáze
- [ ] Spring Data JPA nahrazuje JDBC úplně
- [ ] N/A

### Jak Spring řeší cachování?
- [x] Pomocí @Cacheable a @CacheEvict anotací.
- [ ] Cachování se řeší manuálně pomocí HashMap
- [ ] Spring nepodporuje cachování
- [ ] N/A

### Jak funguje Lazy vs Eager initialization v Springu?
- [x] Lazy načítání odloží instanciaci beanů až do jejich použití, eager načítání vytváří beany při startu aplikace.
- [ ] Lazy a Eager jsou totéž v Springu
- [ ] Eager načítání odloží instanciaci beanů
- [ ] N/A

### Jak funguje Spring WebFlux?
- [x] WebFlux je reaktivní alternativa k tradičnímu Spring MVC.
- [ ] WebFlux je starší verze Spring MVC
- [ ] WebFlux slouží pouze pro WebSocket komunikaci
- [ ] N/A

### Jak funguje mechanismus dependency injection ve Springu?
- [x] Dependency Injection umožňuje Springu automaticky spravovat závislosti mezi objekty.
- [ ] Dependency Injection vyžaduje ruční propojení všech objektů
- [ ] Spring nepoužívá Dependency Injection
- [ ] N/A

### Jaký je rozdíl mezi @Primary a @Qualifier anotacemi?
- [x] @Primary označuje preferovanou instanci beanu, zatímco @Qualifier umožňuje výběr konkrétní instance.
- [ ] @Primary a @Qualifier jsou zaměnitelné
- [ ] @Qualifier označuje preferovanou instanci beanu
- [ ] N/A

### Jak lze ve Springu vytvořit vlastní anotaci?
- [x] Pomocí @Retention, @Target a @Component nebo jiné specifické anotace.
- [ ] Vlastní anotace nelze v Springu vytvořit
- [ ] Vlastní anotace se vytváří pomocí XML konfigurace
- [ ] N/A

### Co je Spring Boot Starter a k čemu slouží?
- [x] Spring Boot Starters jsou předkonfigurované závislosti usnadňující integraci běžných technologií.
- [ ] Spring Boot Starter je nástroj pro spuštění aplikace
- [ ] Starter je hlavní třída Spring Boot aplikace
- [ ] N/A

### Jak Spring Boot automaticky konfiguruje aplikaci?
- [x] Použitím @EnableAutoConfiguration a spring.factories souboru.
- [ ] Auto-konfigurace vyžaduje ruční nastavení každé komponenty
- [ ] Spring Boot nepodporuje auto-konfiguraci
- [ ] N/A

### Jaká je role @Bean anotace ve Springu?
- [x] Označuje metodu, která vytváří a vrací instanci beanu spravovaného Spring kontejnerem.
- [ ] @Bean anotace označuje třídu jako Spring komponentu
- [ ] @Bean slouží pro definování properties
- [ ] N/A

### Jak ve Springu funguje @ComponentScan?
- [x] Automaticky detekuje a registruje komponenty v definovaném balíčku.
- [ ] @ComponentScan skenuje pouze XML soubory
- [ ] @ComponentScan je zastaralá anotace
- [ ] N/A

### Co je JavaConfig ve Springu?
- [x] JavaConfig je způsob konfigurace Spring aplikace pomocí čistého Java kódu namísto XML.
- [ ] JavaConfig je XML konfigurační formát
- [ ] JavaConfig je nástroj pro kompilaci Java kódu
- [ ] N/A

### Jaký je rozdíl mezi @RestController a @Controller?
- [x] @RestController vrací data ve formátu JSON/XML, zatímco @Controller obsluhuje tradiční webové stránky.
- [ ] @Controller vrací JSON a @RestController vrací HTML
- [ ] @RestController a @Controller jsou identické
- [ ] N/A

### Jaké existují typy dependency injection ve Springu?
- [x] Konstruktorová, setterová a field injection.
- [ ] Pouze konstruktorová injection
- [ ] Spring podporuje pouze XML-based injection
- [ ] N/A

### Jak Spring Boot podporuje monitoring a logging?
- [x] Pomocí Spring Actuator a knihoven jako Logback nebo SLF4J.
- [ ] Spring Boot nepodporuje monitoring
- [ ] Logging se v Spring Boot řeší pomocí System.out.println
- [ ] N/A

### Co je Spring Actuator a k čemu se používá?
- [x] Poskytuje metriky a diagnostiku běžící aplikace.
- [ ] Actuator je framework pro testování
- [ ] Actuator slouží pro deployment aplikací
- [ ] N/A

### Jaký je rozdíl mezi checked a unchecked výjimkami ve Springu?
- [x] Checked výjimky musí být ošetřeny, unchecked jsou runtime výjimky.
- [ ] Checked a unchecked výjimky jsou v Springu totéž
- [ ] Spring převádí všechny výjimky na checked
- [ ] N/A

### Jak funguje @Transactional anotace?
- [x] Označuje metodu nebo třídu jako transakční, což zajišťuje správu databázových transakcí.
- [ ] @Transactional slouží pro logování transakcí
- [ ] @Transactional je zastaralá anotace
- [ ] N/A

### Co je Spring MVC a jak funguje?
- [x] Spring MVC je framework pro tvorbu webových aplikací založených na Model-View-Controller architektuře.
- [ ] Spring MVC je databázový framework
- [ ] MVC v Springu znamená Maven-Version-Control
- [ ] N/A

### Jak Spring MVC zpracovává HTTP requesty?
- [x] Pomocí @RequestMapping a dalších souvisejících anotací.
- [ ] HTTP requesty se zpracovávají pomocí Servletů přímo
- [ ] Spring MVC nepodporuje HTTP requesty
- [ ] N/A

### Co je ModelAndView ve Spring MVC?
- [x] Objekt kombinující modelová data a pohled (view) pro vykreslení odpovědi.
- [ ] ModelAndView je způsob validace dat
- [ ] ModelAndView slouží pro databázové operace
- [ ] N/A

### Jak funguje validace ve Springu?
- [x] Pomocí anotací jako @Valid, @NotNull a vlastních validátorů.
- [ ] Validace se v Springu provádí pouze manuálně
- [ ] Spring nepodporuje validaci
- [ ] N/A

### Jak funguje interakce mezi Spring MVC a Thymeleaf?
- [x] Thymeleaf je šablonovací engine podporující dynamické vykreslování HTML ve Spring aplikacích.
- [ ] Thymeleaf je databázový framework
- [ ] Thymeleaf a Spring MVC jsou nekompatibilní
- [ ] N/A

### Co je CORS a jak ho konfigurovat ve Spring Boot?
- [x] Cross-Origin Resource Sharing (CORS) umožňuje bezpečné sdílení zdrojů mezi doménami.
- [ ] CORS je databázový protokol
- [ ] CORS nelze v Spring Boot konfigurovat
- [ ] N/A

### Jak fungují aspekty (AOP) ve Springu?
- [x] Aspekty umožňují aplikovat cross-cutting logiku např. logging nebo bezpečnost.
- [ ] Aspekty jsou způsob definování databázových schémat
- [ ] AOP ve Springu vyžaduje XML konfiguraci
- [ ] N/A

### Jak implementovat vlastní Spring Boot Starter?
- [x] Vytvořením vlastního modulu s AutoConfiguration a definicí závislostí.
- [ ] Vlastní Starter nelze vytvořit
- [ ] Starter se vytváří pomocí XML konfigurace
- [ ] N/A

### Co je Spring Boot DevTools a jak pomáhá vývojářům?
- [x] Zajišťuje automatické restartování aplikace při změně kódu.
- [ ] DevTools je framework pro deployment
- [ ] DevTools slouží pouze pro produkční prostředí
- [ ] N/A

### Jak Spring Boot podporuje konfiguraci databázových spojení?
- [x] Použitím application.properties nebo application.yml a JDBC driverů.
- [ ] Databázová spojení se konfigurují pouze v Java kódu
- [ ] Spring Boot nepodporuje databázová spojení
- [ ] N/A

### Jak funguje Spring WebFlux ve srovnání se Spring MVC?
- [x] WebFlux je reaktivní framework podporující asynchronní programování.
- [ ] WebFlux je starší verze MVC
- [ ] WebFlux a MVC jsou identické
- [ ] N/A

### Co je Reactive Streams a jak souvisí s WebFlux?
- [x] Definuje standard pro asynchronní zpracování datových toků.
- [ ] Reactive Streams je databázový protokol
- [ ] Reactive Streams nesouvisí s WebFlux
- [ ] N/A

### Jaký je rozdíl mezi Mono a Flux v reaktivním Springu?
- [x] Mono vrací jeden prvek, Flux může vrátit více prvků.
- [ ] Mono a Flux jsou identické
- [ ] Flux vrací pouze jeden prvek
- [ ] N/A

### Jak funguje Spring Security OAuth2?
- [x] Umožňuje autentizaci a autorizaci přes OAuth2 protokol.
- [ ] OAuth2 není v Spring Security podporován
- [ ] OAuth2 slouží pouze pro databázové operace
- [ ] N/A

### Jak konfigurovat rate limiting ve Spring Boot?
- [x] Pomocí knihoven jako Bucket4j nebo Spring Cloud Gateway.
- [ ] Rate limiting není ve Spring Boot možný
- [ ] Rate limiting se konfiguruje pouze v databázi
- [ ] N/A

### Jak provést migraci databáze ve Spring Boot?
- [x] Použitím Flyway nebo Liquibase.
- [ ] Migrace databáze není ve Spring Boot podporována
- [ ] Migrace se provádí pouze manuálně
- [ ] N/A

## Spring Boot

### Co je Spring Boot a jaké jsou jeho hlavní výhody?
- [x] Spring Boot je framework, který usnadňuje vývoj aplikací postavených na Spring Framework. Hlavní výhody jsou auto-konfigurace, vestavěné servery (Tomcat, Jetty, Undertow) a jednoduchá integrace s dalšími technologiemi.
- [ ] Spring Boot je databázový framework pro NoSQL databáze
- [ ] Spring Boot je nástroj pro testování Java aplikací
- [ ] N/A

### Jaký je rozdíl mezi Spring a Spring Boot?
- [x] Spring je framework pro vývoj Java aplikací, zatímco Spring Boot staví na Springu a přidává auto-konfiguraci, jednodušší nastavení a vestavěný aplikační server.
- [ ] Spring Boot je starší verze Spring Framework
- [ ] Spring a Spring Boot jsou totéž
- [ ] N/A

### Co je Spring Boot Starter a proč se používá?
- [x] Spring Boot Starters jsou předkonfigurované závislosti, které usnadňují integraci běžných knihoven (např. spring-boot-starter-web pro webové aplikace).
- [ ] Spring Boot Starter je hlavní třída pro spuštění aplikace
- [ ] Starter je GUI nástroj pro vytváření projektů
- [ ] N/A

### Jak funguje auto-konfigurace ve Spring Boot?
- [x] Spring Boot využívá anotaci @EnableAutoConfiguration a analyzuje třídy na classpath, aby automaticky nakonfiguroval aplikaci.
- [ ] Auto-konfigurace vyžaduje ruční nastavení každé komponenty
- [ ] Auto-konfigurace se provádí pouze pomocí XML souborů
- [ ] N/A

### Jak spustit Spring Boot aplikaci bez externího serveru?
- [x] Spring Boot používá vestavěný server (Tomcat, Jetty, Undertow), takže aplikaci lze spustit jako běžnou Java aplikaci pomocí java -jar app.jar.
- [ ] Spring Boot vždy vyžaduje externí aplikační server
- [ ] Bez externího serveru nelze Spring Boot aplikaci spustit
- [ ] N/A

### Jak definovat vlastnosti aplikace ve Spring Boot?
- [x] Pomocí application.properties nebo application.yml, kde se konfigurují parametry jako připojení k databázi, port aplikace atd.
- [ ] Vlastnosti se definují pouze v Java kódu
- [ ] Spring Boot nepodporuje konfigurační soubory
- [ ] N/A

### Jak funguje Spring Boot Actuator?
- [x] Actuator poskytuje metriky, sledování a diagnostiku běžící aplikace (např. /actuator/health, /actuator/metrics).
- [ ] Actuator je framework pro testování
- [ ] Actuator slouží pouze pro deployment aplikací
- [ ] N/A

### Jaký je rozdíl mezi @SpringBootApplication a @EnableAutoConfiguration?
- [x] @SpringBootApplication je kombinace @Configuration, @EnableAutoConfiguration a @ComponentScan.
- [ ] @SpringBootApplication a @EnableAutoConfiguration jsou totéž
- [ ] @EnableAutoConfiguration obsahuje @SpringBootApplication
- [ ] N/A

### Jak implementovat REST API ve Spring Boot?
- [x] Pomocí anotací @RestController, @RequestMapping, @GetMapping, @PostMapping atd.
- [ ] REST API se implementuje pomocí Servletů přímo
- [ ] Spring Boot nepodporuje REST API
- [ ] N/A

### Jak pracovat s databází ve Spring Boot?
- [x] Pomocí Spring Data JPA nebo JDBC Template, propojené přes spring.datasource nastavení v application.properties.
- [ ] Databáze se konfigurují pouze pomocí XML
- [ ] Spring Boot nepodporuje databázová spojení
- [ ] N/A

### Jak lze testovat Spring Boot aplikaci?
- [x] Použitím @SpringBootTest, MockMvc a dalších testovacích frameworků jako JUnit a Testcontainers.
- [ ] Spring Boot neposkytuje podporu pro testování
- [ ] Testování se provádí pouze manuálně
- [ ] N/A

### Jak Spring Boot podporuje logging?
- [x] Použitím SLF4J, Logback nebo Log4j2 a konfigurací v application.properties.
- [ ] Logging se v Spring Boot řeší pomocí System.out.println
- [ ] Spring Boot nepodporuje logging
- [ ] N/A

### Co je DevTools ve Spring Boot?
- [x] DevTools usnadňuje vývoj tím, že umožňuje automatický restart aplikace při změně kódu.
- [ ] DevTools je framework pro deployment
- [ ] DevTools slouží pouze pro produkční prostředí
- [ ] N/A

### Jaký je rozdíl mezi @Component, @Service a @Repository ve Spring Boot?
- [x] Všechny jsou Spring beany, ale mají odlišné použití: @Component pro obecné komponenty, @Service pro business logiku a @Repository pro datovou vrstvu.
- [ ] Všechny tři anotace jsou identické a zaměnitelné
- [ ] @Component je pouze pro testovací účely
- [ ] N/A

### Jak Spring Boot řeší bezpečnost aplikací?
- [x] Pomocí Spring Security, která umožňuje autentizaci a autorizaci uživatelů.
- [ ] Bezpečnost se řeší pomocí @Secure anotace na main metodě
- [ ] Spring Boot neposkytuje žádné bezpečnostní funkce
- [ ] N/A

### Jaký je rozdíl mezi embedded a external databází v Spring Boot?
- [x] Embedded databáze (např. H2) běží v paměti, zatímco externí databáze (např. MySQL, PostgreSQL) vyžadují připojení přes JDBC.
- [ ] Embedded a external databáze jsou totéž
- [ ] Spring Boot podporuje pouze embedded databáze
- [ ] N/A

### Jak konfigurovat cache ve Spring Boot?
- [x] Použitím anotací @Cacheable, @CachePut a @CacheEvict.
- [ ] Cache se konfiguruje pouze pomocí XML
- [ ] Spring Boot nepodporuje cachování
- [ ] N/A

### Jak implementovat messaging v Spring Boot?
- [x] Použitím Spring Boot s RabbitMQ, Kafka nebo ActiveMQ.
- [ ] Messaging není ve Spring Boot podporován
- [ ] Messaging se implementuje pouze pomocí REST API
- [ ] N/A

### Jak nakonfigurovat více profilů v Spring Boot?
- [x] Použitím spring.profiles.active v application.properties nebo application.yml.
- [ ] Profily se konfigurují pouze v Java kódu
- [ ] Spring Boot podporuje pouze jeden profil
- [ ] N/A

### Jak funguje @Value anotace ve Spring Boot?
- [x] @Value umožňuje vkládání hodnot z application.properties do proměnných tříd.
- [ ] @Value slouží pro definování konstant
- [ ] @Value je zastaralá anotace
- [ ] N/A

### Jak funguje mechanismus závislostí ve Spring Boot?
- [x] Spring Boot využívá Maven nebo Gradle k automatickému spravování závislostí prostřednictvím Spring Boot Starters.
- [ ] Závislosti se spravují pouze manuálně
- [ ] Spring Boot nepodporuje správu závislostí
- [ ] N/A

### Jak nakonfigurovat vlastní banner při startu aplikace ve Spring Boot?
- [x] Vytvořením banner.txt v src/main/resources nebo použitím spring.banner.location.
- [ ] Banner nelze v Spring Boot změnit
- [ ] Banner se konfiguruje pouze v Java kódu
- [ ] N/A

### Jaký je rozdíl mezi @RestController a @Controller?
- [x] @RestController vrací odpověď jako JSON/XML, zatímco @Controller obvykle obsluhuje šablony HTML.
- [ ] @Controller vrací JSON a @RestController vrací HTML
- [ ] @RestController a @Controller jsou identické
- [ ] N/A

### Jak Spring Boot podporuje asynchronní zpracování?
- [x] Pomocí anotace @Async a povolením @EnableAsync v konfiguraci.
- [ ] Asynchronní zpracování není ve Spring Boot podporováno
- [ ] Async se řeší pouze pomocí vláken Thread
- [ ] N/A

### Jak lze zabezpečit REST API ve Spring Boot?
- [x] Pomocí Spring Security a JWT (JSON Web Token).
- [ ] REST API nelze ve Spring Boot zabezpečit
- [ ] Zabezpečení se řeší pouze na úrovni databáze
- [ ] N/A

### Jak implementovat vlastní filtry ve Spring Boot?
- [x] Vytvořením třídy implementující javax.servlet.Filter a označením @Component.
- [ ] Filtry nelze ve Spring Boot implementovat
- [ ] Filtry se definují pouze v XML konfiguraci
- [ ] N/A

### Jak funguje Error Handling ve Spring Boot?
- [x] Pomocí @ExceptionHandler, @ControllerAdvice nebo vlastního ErrorController.
- [ ] Error handling se řeší pouze pomocí try-catch bloků
- [ ] Spring Boot nepodporuje error handling
- [ ] N/A

### Jak nakonfigurovat vlastní inicializační logiku ve Spring Boot?
- [x] Použitím CommandLineRunner nebo ApplicationRunner.
- [ ] Inicializační logika se definuje pouze v main metodě
- [ ] Spring Boot nepodporuje vlastní inicializaci
- [ ] N/A

### Jaký je rozdíl mezi Spring Boot a Spring Cloud?
- [x] Spring Boot je zaměřený na vývoj aplikací, Spring Cloud poskytuje nástroje pro práci s mikroservisní architekturou.
- [ ] Spring Boot a Spring Cloud jsou totéž
- [ ] Spring Cloud je starší verze Spring Boot
- [ ] N/A

### Jak Spring Boot pracuje s WebSockets?
- [x] Pomocí knihovny spring-websocket a anotací @MessageMapping.
- [ ] WebSockets nejsou ve Spring Boot podporovány
- [ ] WebSockets se implementují pouze pomocí REST API
- [ ] N/A

### Jak implementovat task scheduling ve Spring Boot?
- [x] Použitím @Scheduled anotace a povolením @EnableScheduling.
- [ ] Scheduling není ve Spring Boot podporován
- [ ] Scheduling se řeší pouze pomocí externích nástrojů
- [ ] N/A

### Jak lze sledovat výkon aplikace ve Spring Boot?
- [x] Použitím Spring Boot Actuator a externích nástrojů jako Prometheus a Grafana.
- [ ] Výkon aplikace nelze sledovat
- [ ] Sledování výkonu se provádí pouze manuálně
- [ ] N/A

### Jak nakonfigurovat SMTP server pro odesílání e-mailů ve Spring Boot?
- [x] Pomocí spring.mail.host, spring.mail.port a dalších nastavení v application.properties.
- [ ] E-maily nelze ve Spring Boot odesílat
- [ ] SMTP se konfiguruje pouze v Java kódu
- [ ] N/A

### Jak funguje Spring Boot DevTools LiveReload?
- [x] Automaticky restartuje aplikaci při změně zdrojových souborů.
- [ ] LiveReload vyžaduje ruční restart aplikace
- [ ] LiveReload není součástí DevTools
- [ ] N/A

### Jak zajistit externí konfiguraci Spring Boot aplikace?
- [x] Použitím application.properties, YAML souborů, Environment Variables nebo Spring Cloud Config Serveru.
- [ ] Externí konfigurace není ve Spring Boot možná
- [ ] Konfigurace se definuje pouze v Java kódu
- [ ] N/A

### Jaký je rozdíl mezi blocking a non-blocking IO v Spring Boot?
- [x] Blocking IO využívá tradiční thread-per-request model, zatímco non-blocking IO používá reaktivní programování (WebFlux).
- [ ] Blocking a non-blocking IO jsou totéž
- [ ] Spring Boot podporuje pouze blocking IO
- [ ] N/A

### Jak Spring Boot podporuje monitoring metrik?
- [x] Pomocí Micrometer a Actuator endpointů jako /actuator/metrics.
- [ ] Monitoring metrik není ve Spring Boot podporován
- [ ] Metriky se sledují pouze manuálně
- [ ] N/A

### Jak implementovat Circuit Breaker ve Spring Boot?
- [x] Pomocí Resilience4j nebo Hystrix.
- [ ] Circuit Breaker není ve Spring Boot podporován
- [ ] Circuit Breaker se implementuje pouze manuálně
- [ ] N/A

### Jak Spring Boot pracuje s externími službami?
- [x] Použitím REST clients jako WebClient nebo RestTemplate.
- [ ] Spring Boot nepodporuje volání externích služeb
- [ ] Externí služby se volají pouze pomocí JDBC
- [ ] N/A

### Jak nakonfigurovat Spring Boot aplikaci pro produkční nasazení?
- [x] Použitím správného profilu (spring.profiles.active=prod), optimalizací memory managementu a monitoringem.
- [ ] Produkční nasazení nevyžaduje speciální konfiguraci
- [ ] Spring Boot není vhodný pro produkční prostředí
- [ ] N/A

### Jak funguje dependency injection v Spring Boot?
- [x] Pomocí anotací @Autowired, @Inject nebo ruční konfigurací beanu.
- [ ] Dependency injection vyžaduje ruční propojení všech objektů
- [ ] Spring Boot nepoužívá dependency injection
- [ ] N/A

### Jak lze provést graceful shutdown ve Spring Boot?
- [x] Povolením spring.lifecycle.timeout-per-shutdown-phase a použitím @PreDestroy.
- [ ] Graceful shutdown není ve Spring Boot podporován
- [ ] Aplikace se vždy ukončí okamžitě
- [ ] N/A

### Jak Spring Boot podporuje API versioning?
- [x] Použitím URL (/api/v1/resource), HTTP Headers nebo parametrů dotazu.
- [ ] API versioning není ve Spring Boot podporován
- [ ] Verzování se provádí pouze pomocí různých aplikací
- [ ] N/A

### Jaký je rozdíl mezi Spring Boot a Quarkus/Micronaut?
- [x] Quarkus a Micronaut jsou optimalizované pro nativní běh na GraalVM, zatímco Spring Boot je zaměřený na univerzální použití.
- [ ] Spring Boot, Quarkus a Micronaut jsou totéž
- [ ] Spring Boot je optimalizovaný pro GraalVM
- [ ] N/A

### Jak Spring Boot podporuje serverless aplikace?
- [x] Pomocí Spring Cloud Function a AWS Lambda integrace.
- [ ] Spring Boot nepodporuje serverless aplikace
- [ ] Serverless se řeší pouze pomocí externích frameworků
- [ ] N/A

### Jak pracovat s HTTP2 v Spring Boot?
- [x] Povolením server.http2.enabled=true v konfiguraci.
- [ ] HTTP2 není ve Spring Boot podporován
- [ ] HTTP2 vyžaduje speciální framework
- [ ] N/A

### Jak konfigurovat Session Management ve Spring Boot?
- [x] Použitím spring.session.store-type pro uložení do databáze nebo Redis.
- [ ] Session management není ve Spring Boot podporován
- [ ] Sessions se konfigurují pouze v Java kódu
- [ ] N/A

### Jak Spring Boot podporuje GraphQL?
- [x] Použitím knihovny spring-graphql a anotací jako @QueryMapping.
- [ ] GraphQL není ve Spring Boot podporován
- [ ] GraphQL se implementuje pouze pomocí REST API
- [ ] N/A

### Jak lze implementovat distributed tracing ve Spring Boot?
- [x] Pomocí Spring Cloud Sleuth a Zipkin.
- [ ] Distributed tracing není ve Spring Boot podporován
- [ ] Tracing se provádí pouze manuálně
- [ ] N/A

### Jaký je rozdíl mezi Spring Boot CLI a běžnou Spring Boot aplikací?
- [x] Spring Boot CLI umožňuje rychlé spouštění aplikací bez nutnosti kompilace pomocí Groovy skriptů.
- [ ] Spring Boot CLI a běžná aplikace jsou totéž
- [ ] CLI je jediný způsob jak spustit Spring Boot
- [ ] N/A

## Relational Databases

### Co je relační databáze?
- [x] Relační databáze je typ databáze, který organizuje data do tabulek s pevně definovanými vztahy mezi nimi.
- [ ] Relační databáze ukládá data jako dokumenty
- [ ] Relační databáze nepodporuje vztahy mezi daty
- [ ] N/A

### Jaký je rozdíl mezi SQL a NoSQL databázemi?
- [x] SQL databáze používají relační model s pevnou schémou, zatímco NoSQL databáze jsou flexibilnější a podporují různé modely ukládání dat.
- [ ] SQL a NoSQL databáze jsou totéž
- [ ] NoSQL databáze používají pevnou schému
- [ ] N/A

### Jaký je rozdíl mezi MySQL, PostgreSQL a Oracle DB?
- [x] MySQL je populární open-source databáze s vysokou rychlostí, PostgreSQL je pokročilá open-source databáze s plnou podporou ACID a Oracle DB je komerční databáze s pokročilými funkcemi pro enterprise použití.
- [ ] Všechny tři databáze jsou identické
- [ ] Oracle DB je open-source databáze
- [ ] N/A

### Co je ACID v databázích?
- [x] ACID (Atomicity, Consistency, Isolation, Durability) jsou vlastnosti, které zajišťují spolehlivost transakcí v databázích.
- [ ] ACID je typ databázového dotazu
- [ ] ACID je název databázového serveru
- [ ] N/A

### Jaké jsou hlavní typy indexů v relačních databázích?
- [x] B-tree, Hash indexy, Full-text indexy, Bitmap indexy.
- [ ] Pouze B-tree indexy
- [ ] Relační databáze nepodporují indexy
- [ ] N/A

### Jaký je rozdíl mezi primárním a unikátním klíčem?
- [x] Primární klíč zajišťuje jedinečnost každého řádku a nemůže obsahovat NULL hodnoty, zatímco unikátní klíč zajišťuje jedinečnost, ale může obsahovat NULL.
- [ ] Primární a unikátní klíč jsou totéž
- [ ] Unikátní klíč nemůže obsahovat NULL
- [ ] N/A

### Co je cizí klíč a jak funguje?
- [x] Cizí klíč je sloupec, který odkazuje na primární klíč jiné tabulky a zajišťuje referenční integritu mezi tabulkami.
- [ ] Cizí klíč je primární klíč jiné tabulky
- [ ] Cizí klíč slouží pro šifrování dat
- [ ] N/A

### Jak fungují transakce v databázích?
- [x] Transakce seskupují více SQL operací do jednoho logického celku, který se buď provede celý, nebo se vrátí zpět (rollback).
- [ ] Transakce jsou jednotlivé SQL příkazy
- [ ] Transakce nelze vrátit zpět
- [ ] N/A

### Co je normalizace a jaké má úrovně?
- [x] Normalizace je proces organizace dat do efektivní podoby. Úrovně normalizace zahrnují 1NF, 2NF, 3NF, BCNF atd.
- [ ] Normalizace je proces zálohování dat
- [ ] Normalizace má pouze jednu úroveň
- [ ] N/A

### Jak funguje denormalizace a kdy se používá?
- [x] Denormalizace je proces kombinace tabulek za účelem zvýšení výkonu čtení na úkor redundance.
- [ ] Denormalizace je opak normalizace a vždy zhoršuje výkon
- [ ] Denormalizace se nikdy nepoužívá
- [ ] N/A

### Co je JOIN v SQL a jaké jsou jeho typy?
- [x] JOIN se používá k propojení dat z více tabulek. Typy: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN.
- [ ] JOIN je pouze jeden typ
- [ ] JOIN slouží pro mazání dat
- [ ] N/A

### Co je subquery a kdy se používá?
- [x] Subquery je vnořený dotaz uvnitř jiného SQL dotazu, který pomáhá s komplexními výpočty a filtracemi.
- [ ] Subquery je hlavní dotaz
- [ ] Subquery nelze použít uvnitř jiného dotazu
- [ ] N/A

### Jaký je rozdíl mezi HAVING a WHERE?
- [x] WHERE filtruje řádky před agregací, zatímco HAVING filtruje výsledky po agregaci.
- [ ] HAVING a WHERE jsou totéž
- [ ] WHERE filtruje po agregaci
- [ ] N/A

### Jaké jsou běžné optimalizační techniky SQL dotazů?
- [x] Použití indexů, optimalizace JOIN operací, omezení SELECT *, denormalizace pro časté dotazy.
- [ ] SQL dotazy nelze optimalizovat
- [ ] Pouze přidáním více serverů
- [ ] N/A

### Jak funguje partitioning v databázích?
- [x] Partitioning rozděluje tabulky na menší části pro zlepšení výkonu dotazů a správy dat.
- [ ] Partitioning spojuje tabulky dohromady
- [ ] Partitioning slouží pro šifrování dat
- [ ] N/A

### Co je materializovaný pohled?
- [x] Materializovaný pohled je uložený výsledek dotazu, který lze periodicky aktualizovat pro zvýšení výkonu.
- [ ] Materializovaný pohled je běžný pohled
- [ ] Materializovaný pohled nelze aktualizovat
- [ ] N/A

### Jak funguje sekvence v Oracle DB?
- [x] Sekvence generují unikátní čísla, která se často používají jako primární klíče.
- [ ] Sekvence jsou typy tabulek
- [ ] Sekvence slouží pro řazení dat
- [ ] N/A

### Jak lze zálohovat relační databázi?
- [x] Pomocí příkazů jako mysqldump pro MySQL, pg_dump pro PostgreSQL nebo RMAN pro Oracle DB.
- [ ] Relační databáze nelze zálohovat
- [ ] Pouze kopírováním souborů na disk
- [ ] N/A

### Jak funguje transakční izolace v databázích?
- [x] Transakční izolace řídí souběžný přístup k datům pomocí úrovní READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ a SERIALIZABLE.
- [ ] Transakční izolace má pouze jednu úroveň
- [ ] Transakční izolace není v databázích podporována
- [ ] N/A

### Co je deadlock v databázích a jak ho předcházet?
- [x] Deadlock je situace, kdy dvě transakce čekají na uvolnění zdroje, což vede k zablokování. Lze mu předejít správným pořadím uzamykání zdrojů.
- [ ] Deadlock je běžná operace v databázích
- [ ] Deadlock nelze nijak řešit
- [ ] N/A

### Jaký je rozdíl mezi klastrovými a neklastrovými indexy?
- [x] Klastrový index určuje fyzické uspořádání dat v tabulce, zatímco neklastrový index vytváří samostatnou strukturu s ukazatelem na data.
- [ ] Klastrové a neklastrové indexy jsou totéž
- [ ] Neklastrový index určuje fyzické uspořádání
- [ ] N/A

### Jak funguje transakční log v databázích?
- [x] Transakční log zaznamenává všechny změny provedené v databázi, což umožňuje obnovení dat v případě selhání.
- [ ] Transakční log slouží pouze pro audit
- [ ] Transakční log nelze použít pro obnovu
- [ ] N/A

### Co je rollback a commit v SQL?
- [x] Commit potvrzuje provedené změny, zatímco rollback vrací databázi do stavu před začátkem transakce.
- [ ] Rollback a commit jsou totéž
- [ ] Commit vrací změny zpět
- [ ] N/A

### Jaké jsou výhody a nevýhody uložených procedur?
- [x] Výhody: lepší výkon, znovupoužitelnost, bezpečnost. Nevýhody: složitější údržba, závislost na konkrétní databázi.
- [ ] Uložené procedury mají pouze výhody
- [ ] Uložené procedury nelze použít
- [ ] N/A

### Jaký je rozdíl mezi DELETE, TRUNCATE a DROP?
- [x] DELETE odstraní specifické řádky s možností rollbacku, TRUNCATE odstraní všechna data v tabulce bez možnosti rollbacku, DROP odstraní celou tabulku.
- [ ] DELETE, TRUNCATE a DROP jsou totéž
- [ ] DROP odstraní pouze data
- [ ] N/A

### Jaké jsou různé druhy pohledů (views) v databázích?
- [x] Standardní pohledy, materializované pohledy a indexované pohledy.
- [ ] Existuje pouze jeden typ pohledu
- [ ] Pohledy v databázích neexistují
- [ ] N/A

### Jak funguje optimistické a pesimistické zamykání v databázích?
- [x] Optimistické zamykání neblokuje řádky, ale kontroluje konflikty při potvrzení změn, zatímco pesimistické zamykání zabrání ostatním transakcím přístup ke stejným datům.
- [ ] Optimistické a pesimistické zamykání jsou totéž
- [ ] Pesimistické zamykání nekontroluje konflikty
- [ ] N/A

### Jak fungují triggery v databázích?
- [x] Triggery jsou automatické akce spuštěné při změně dat v tabulce (INSERT, UPDATE, DELETE).
- [ ] Triggery jsou manuální příkazy
- [ ] Triggery nelze použít pro UPDATE operace
- [ ] N/A

### Jaké jsou hlavní rozdíly mezi MySQL a PostgreSQL?
- [x] PostgreSQL podporuje více pokročilých funkcí jako JSONB, pokročilé indexování a transakční tabulky, zatímco MySQL je rychlejší pro jednoduché dotazy.
- [ ] MySQL a PostgreSQL jsou identické
- [ ] MySQL podporuje více funkcí než PostgreSQL
- [ ] N/A

### Jak nastavit replikaci databáze?
- [x] Pomocí Master-Slave nebo Master-Master replikace, například v MySQL pomocí binlog.
- [ ] Replikace databáze není možná
- [ ] Replikace vyžaduje pouze kopírování souborů
- [ ] N/A

### Jak funguje sharding v relačních databázích?
- [x] Sharding rozděluje data mezi více databázových serverů pro škálovatelnost.
- [ ] Sharding spojuje data z více serverů do jednoho
- [ ] Sharding slouží pro zálohování
- [ ] N/A

### Jaký je rozdíl mezi logickým a fyzickým schématem databáze?
- [x] Logické schéma definuje strukturu dat (tabulky, relace), fyzické schéma určuje, jak jsou data uložena na disku.
- [ ] Logické a fyzické schéma jsou totéž
- [ ] Fyzické schéma definuje strukturu dat
- [ ] N/A

### Co je referenční integrita a jak se implementuje?
- [x] Zajišťuje konzistenci dat mezi tabulkami pomocí cizích klíčů a omezení.
- [ ] Referenční integrita je typ indexu
- [ ] Referenční integrita nelze implementovat
- [ ] N/A

### Jaký je rozdíl mezi synchronní a asynchronní replikací databáze?
- [x] Synchronní replikace zapisuje data na všechny uzly současně, asynchronní umožňuje zpoždění zápisu.
- [ ] Synchronní a asynchronní replikace jsou totéž
- [ ] Asynchronní replikace zapisuje současně
- [ ] N/A

### Jak fungují časové tabulky (temporal tables) v databázích?
- [x] Umožňují uchování historie změn řádků a dotazování na data v určitém čase.
- [ ] Časové tabulky jsou běžné tabulky
- [ ] Časové tabulky neukládají historii
- [ ] N/A

### Jak lze optimalizovat výkon databázových dotazů?
- [x] Použitím indexů, optimalizací SQL dotazů, redukcí zbytečných JOIN operací a materializovaných pohledů.
- [ ] Výkon dotazů nelze optimalizovat
- [ ] Pouze přidáním více RAM
- [ ] N/A

### Co je CTE (Common Table Expression)?
- [x] Dočasný pojmenovaný výsledek dotazu, který usnadňuje čitelnost a organizaci složitých SQL dotazů.
- [ ] CTE je typ tabulky
- [ ] CTE je databázový index
- [ ] N/A

### Jak funguje full-textové vyhledávání v databázích?
- [x] Použitím full-textových indexů, které umožňují efektivní vyhledávání v textových datech.
- [ ] Full-textové vyhledávání není v databázích podporováno
- [ ] Full-text vyhledávání používá pouze LIKE
- [ ] N/A

### Jaká je role statistik v databázovém optimalizátoru?
- [x] Statistiky pomáhají optimalizátoru SQL při výběru nejefektivnějšího způsobu provedení dotazů.
- [ ] Statistiky slouží pouze pro reporting
- [ ] Statistiky nemají vliv na výkon dotazů
- [ ] N/A

### Jak funguje row-level security (RLS) v PostgreSQL?
- [x] Umožňuje definovat přístupová pravidla na úrovni jednotlivých řádků v tabulce.
- [ ] RLS je typ indexu
- [ ] RLS funguje pouze na úrovni tabulek
- [ ] N/A

### Jaký je rozdíl mezi SARGable a non-SARGable dotazy?
- [x] SARGable dotazy umožňují efektivní použití indexů, zatímco non-SARGable dotazy nutí databázi ke skenování celé tabulky.
- [ ] SARGable a non-SARGable jsou totéž
- [ ] Non-SARGable dotazy jsou rychlejší
- [ ] N/A

### Jak fungují sequence objekty v PostgreSQL a Oracle?
- [x] Sequence generují unikátní číselné hodnoty, obvykle používané pro primární klíče.
- [ ] Sequence jsou typy tabulek
- [ ] Sequence generují náhodná čísla
- [ ] N/A

### Jaká je role redo logů v Oracle DB?
- [x] Redo logy zaznamenávají všechny změny provedené v databázi a umožňují obnovení dat po pádu systému.
- [ ] Redo logy slouží pouze pro audit
- [ ] Redo logy jsou typ indexu
- [ ] N/A

### Jak funguje pluggable database (PDB) v Oracle?
- [x] Umožňuje provoz více izolovaných databází uvnitř jedné instance Oracle Database.
- [ ] PDB je typ tabulky
- [ ] PDB slouží pro zálohování
- [ ] N/A

### Jaké jsou rozdíly mezi OLTP a OLAP databázemi?
- [x] OLTP (Online Transaction Processing) se zaměřuje na rychlé transakce, OLAP (Online Analytical Processing) je optimalizováno pro dotazy nad velkým objemem dat.
- [ ] OLTP a OLAP jsou totéž
- [ ] OLAP se zaměřuje na rychlé transakce
- [ ] N/A

### Jak funguje tempdb v SQL Serveru?
- [x] Tempdb je systémová databáze, která slouží k ukládání dočasných tabulek a výsledků dotazů.
- [ ] Tempdb je běžná uživatelská databáze
- [ ] Tempdb slouží pro zálohování
- [ ] N/A

### Jak pracuje EXPLAIN PLAN v databázích?
- [x] Ukazuje, jak databázový optimalizátor plánuje vykonání SQL dotazu, což pomáhá při ladění výkonu.
- [ ] EXPLAIN PLAN spouští dotaz
- [ ] EXPLAIN PLAN slouží pro zálohování
- [ ] N/A

### Jak lze zjistit aktuální zámky v databázi?
- [x] V PostgreSQL pomocí pg_locks, v MySQL pomocí SHOW ENGINE INNODB STATUS.
- [ ] Zámky v databázi nelze zjistit
- [ ] Zámky se zobrazují automaticky
- [ ] N/A

### Co je database snapshot a jak se používá?
- [x] Database snapshot je zachycení stavu databáze v určitém čase, což umožňuje rychlé obnovení.
- [ ] Snapshot je typ indexu
- [ ] Snapshot slouží pouze pro testování
- [ ] N/A

### Jak se v relačních databázích pracuje s JSON daty?
- [x] PostgreSQL podporuje JSONB pro efektivní indexování a manipulaci s JSON daty, MySQL má JSON datatype pro ukládání strukturovaných dat.
- [ ] Relační databáze nepodporují JSON
- [ ] JSON data nelze indexovat
- [ ] N/A

## Maven / Gradle

### Co je Maven a k čemu slouží?
- [x] Maven je nástroj pro správu závislostí a automatizaci sestavení projektů v jazyce Java.
- [ ] Maven je programovací jazyk
- [ ] Maven je databázový systém
- [ ] N/A

### Jaký je rozdíl mezi Mavenem a Gradlem?
- [x] Maven používá XML (pom.xml) a má pevnou strukturu, zatímco Gradle využívá Groovy/Kotlin DSL (build.gradle) a je flexibilnější.
- [ ] Maven a Gradle jsou totéž
- [ ] Gradle používá XML konfiguraci
- [ ] N/A

### Co je POM.xml v Mavenu?
- [x] POM (Project Object Model) je hlavní konfigurační soubor Mavenu, který definuje závislosti, pluginy a nastavení sestavení projektu.
- [ ] POM.xml je spustitelný soubor
- [ ] POM.xml slouží pouze pro testování
- [ ] N/A

### Jak se definuje závislost v Maven projektu?
- [x] Pomocí <dependency> v pom.xml, kde je specifikován groupId, artifactId a version.
- [ ] Závislosti se definují v Java kódu
- [ ] Maven nepodporuje závislosti
- [ ] N/A

### Co jsou Maven lifecycles a jaké jsou jejich hlavní fáze?
- [x] Maven má tři hlavní lifecycle: clean, default a site. Default lifecycle zahrnuje fáze jako compile, test, package, verify, install a deploy.
- [ ] Maven má pouze jeden lifecycle
- [ ] Lifecycle v Mavenu neexistuje
- [ ] N/A

### Jak Maven spravuje repository závislostí?
- [x] Používá lokální (~/.m2/repository), centrální (Maven Central Repository) a vzdálené repozitáře.
- [ ] Maven používá pouze lokální repozitář
- [ ] Maven nepodporuje repozitáře
- [ ] N/A

### Jak funguje Maven dependency management?
- [x] Řeší závislosti pomocí transitive dependency resolution – automaticky stahuje závislosti a jejich závislosti.
- [ ] Závislosti se musí stahovat manuálně
- [ ] Maven nepodporuje transitivní závislosti
- [ ] N/A

### Jak lze vytvořit multi-module projekt v Mavenu?
- [x] Pomocí parent POM, kde hlavní projekt (pom.xml) obsahuje <modules> s odkazy na podsložky modulů.
- [ ] Multi-module projekty Maven nepodporuje
- [ ] Moduly se definují v Java kódu
- [ ] N/A

### Jak v Mavenu fungují pluginy?
- [x] Maven používá pluginy k rozšíření funkcionality, např. maven-compiler-plugin pro kompilaci kódu.
- [ ] Maven nepodporuje pluginy
- [ ] Pluginy se definují v Java kódu
- [ ] N/A

### Jak spustit Maven build?
- [x] Použitím příkazu mvn clean install nebo jiného relevantního cíle.
- [ ] Maven build se spouští automaticky
- [ ] Pomocí příkazu java -jar maven
- [ ] N/A

### Co je Gradle a proč se používá?
- [x] Gradle je buildovací nástroj, který umožňuje spravovat závislosti, kompilaci kódu, testování a nasazení.
- [ ] Gradle je programovací jazyk
- [ ] Gradle je databázový systém
- [ ] N/A

### Jaký je rozdíl mezi implementation a compile v Gradle?
- [x] implementation je novější způsob správy závislostí a omezuje viditelnost závislostí oproti zastaralému compile.
- [ ] implementation a compile jsou totéž
- [ ] compile je novější než implementation
- [ ] N/A

### Jak fungují Gradle build skripty?
- [x] Gradle používá build.gradle (Groovy) nebo build.gradle.kts (Kotlin) pro definici sestavení.
- [ ] Gradle používá XML konfiguraci
- [ ] Build skripty se píší v Javě
- [ ] N/A

### Jaký je rozdíl mezi build.gradle a settings.gradle?
- [x] build.gradle definuje konfiguraci sestavení projektu, zatímco settings.gradle spravuje multi-module projekty.
- [ ] build.gradle a settings.gradle jsou totéž
- [ ] settings.gradle definuje závislosti
- [ ] N/A

### Jak přidat závislost v Gradle?
- [x] Pomocí dependencies bloku v build.gradle, např. implementation 'org.springframework.boot:spring-boot-starter-web:2.5.4'.
- [ ] Závislosti se přidávají v settings.gradle
- [ ] Gradle nepodporuje závislosti
- [ ] N/A

### Jak Gradle provádí inkrementální buildy?
- [x] Použitím mechanismu task inputs and outputs, který sleduje změny a spouští pouze potřebné úlohy.
- [ ] Gradle vždy provádí plný build
- [ ] Inkrementální buildy Gradle nepodporuje
- [ ] N/A

### Jaký je rozdíl mezi gradle build a gradle assemble?
- [x] build provede testy a sestaví aplikaci, zatímco assemble pouze vytvoří binární artefakty.
- [ ] build a assemble jsou totéž
- [ ] assemble provádí testy
- [ ] N/A

### Jak funguje Gradle caching?
- [x] Gradle ukládá výsledky úloh do cache a znovu je používá, pokud se nezměnily vstupy.
- [ ] Gradle nepodporuje caching
- [ ] Cache se nikdy nepoužívá znovu
- [ ] N/A

### Co je Gradle Wrapper?
- [x] Gradle Wrapper umožňuje spouštět Gradle build bez nutnosti instalace Gradle v systému.
- [ ] Gradle Wrapper je GUI nástroj
- [ ] Wrapper slouží pro testování
- [ ] N/A

### Jak spustit testy v Maven a Gradle?
- [x] V Maven pomocí mvn test, v Gradle pomocí gradle test.
- [ ] Testy se spouští automaticky
- [ ] Maven a Gradle nepodporují testy
- [ ] N/A

### Jak vytvořit JAR soubor v Maven a Gradle?
- [x] V Maven pomocí mvn package, v Gradle pomocí gradle jar.
- [ ] JAR soubory nelze vytvořit
- [ ] Pomocí příkazu java -jar create
- [ ] N/A

### Jak funguje profilování buildů v Gradle?
- [x] Pomocí příkazu gradle --profile lze analyzovat výkon sestavení.
- [ ] Profilování v Gradle není možné
- [ ] Profilování se provádí v IDE
- [ ] N/A

### Jak lze zrychlit build v Gradle?
- [x] Použitím --parallel, --daemon a --build-cache.
- [ ] Build v Gradle nelze zrychlit
- [ ] Pouze přidáním více RAM
- [ ] N/A

### Jak Maven a Gradle pracují s centralizovanými repozitáři?
- [x] Maven používá Maven Central, Gradle může používat Maven Central, JCenter nebo jiné.
- [ ] Maven a Gradle nepodporují centrální repozitáře
- [ ] Repozitáře jsou pouze lokální
- [ ] N/A

### Kdy použít Maven a kdy Gradle?
- [x] Maven je lepší pro tradiční Java projekty s pevnou strukturou, zatímco Gradle je vhodnější pro flexibilní a moderní buildy s větší přizpůsobitelností.
- [ ] Maven a Gradle jsou zaměnitelné
- [ ] Gradle je vždy lepší volba
- [ ] N/A

## Microservice Architecture

### Co je mikroservisní architektura?
- [x] Mikroservisní architektura je přístup k vývoji softwaru, kde aplikace sestává z malých, nezávisle nasaditelných služeb, které komunikují přes API.
- [ ] Architektura využívající jeden velký server pro všechny služby
- [ ] Způsob organizace databázových tabulek
- [ ] N/A

### Jaké jsou hlavní výhody mikroservisní architektury?
- [x] Škálovatelnost, nezávislé nasazování, lepší údržba, odolnost proti chybám a technologická flexibilita.
- [ ] Jednodušší vývoj díky jednomu velkému monolitu
- [ ] Nižší náklady na hardware a licencování
- [ ] N/A

### Jaké jsou nevýhody mikroservisní architektury?
- [x] Složitější komunikace, vyšší provozní režie, potřeba správy distribuovaných dat a bezpečnostní výzvy.
- [ ] Nemožnost škálovat jednotlivé služby nezávisle
- [ ] Nutnost používat pouze jeden programovací jazyk
- [ ] N/A

### Jaké jsou běžné způsoby komunikace mezi mikroservisami?
- [x] REST API, gRPC, Asynchronní messaging (Kafka, RabbitMQ) odeslání a zpracování (přečtení zprávy je oddělené), Event-driven architektura (Kafka, Rabbit), vytvoření eventu, které je zachycen jedním či více posluchačů, s různou reakcí.
- [ ] Pouze přímé volání databázových procedur
- [ ] Výhradně sdílení souborů na disku
- [ ] N/A

### Co je API Gateway a proč se používá?
- [x] API Gateway funguje jako vstupní bod pro všechny mikroservisy, poskytuje autentizaci, rate limiting, agregaci odpovědí a caching.
- [ ] Nástroj pro vytváření databázových schémat
- [ ] Plugin pro IDE usnadňující psaní kódu
- [ ] N/A

### Jaké jsou strategie databází v mikroservisní architektuře?
- [x] Sdílená databáze, databáze na službu (Database-per-service), Event Sourcing, CQRS (Command Query Responsibility Segregation).
- [ ] Pouze jedna centrální databáze pro všechny služby
- [ ] Výhradně souborové úložiště bez SQL databází
- [ ] N/A

### Jaký je rozdíl mezi synchronní a asynchronní komunikací mezi mikroservisami?
- [x] Synchronní komunikace vyžaduje okamžitou odpověď (např. REST, gRPC), zatímco asynchronní využívá zprávy a eventy (Kafka, RabbitMQ).
- [ ] Synchronní komunikace je vždy rychlejší než asynchronní
- [ ] Asynchronní komunikace vyžaduje přímé propojení služeb
- [ ] N/A

### Co je Service Discovery a jak funguje?
- [x] Umožňuje mikroservisám dynamicky nacházet a komunikovat mezi sebou, běžně implementováno pomocí Eureka, Consul, Zookeeper.
- [ ] Nástroj pro automatické generování dokumentace
- [ ] Proces hledání bezpečnostních chyb v kódu
- [ ] N/A

### Jaké jsou strategie škálování mikroservis?
- [x] Horizontální škálování (replikace instancí), automatické škálování (HPA v Kubernetes), rozdělení na menší služby.
- [ ] Pouze vertikální škálování přidáním více RAM
- [ ] Manuální restartování služeb při zvýšeném zatížení
- [ ] N/A

### Co je Circuit Breaker pattern a proč se používá?
- [x] Slouží k prevenci přetížení selhávajících služeb. Implementován v Netflix Hystrix, Resilience4j.
- [ ] Technika pro šifrování komunikace mezi službami
- [ ] Způsob zálohování databází v reálném čase
- [ ] N/A

### Jak mikroservisy řeší transakce?
- [x] Pomocí Distribuovaných transakcí: 1. Pomocí SAGA patternu, 2. dvoufázového commit protokolu (2PC, funguje ale není moc vhodný - výkon, škálovatelsnost), 3. Outbox Pattern + Polling (CDC) nebo kompenzačních transakcí (Camunda, Temporal.io, Axon, Apache Kafka).
- [ ] Použitím jedné globální transakce pro všechny služby
- [ ] Transakce se v mikroservisách nepoužívají
- [ ] N/A

### Jaký je rozdíl mezi monolitem a mikroservisami?
- [x] Monolit je jedna velká aplikace, mikroservisy jsou malé, autonomní služby.
- [ ] Monolit vždy vyžaduje více serverů než mikroservisy
- [ ] Mikroservisy nelze nasadit do cloudu
- [ ] N/A

### Jak implementovat zabezpečení v mikroservisní architektuře?
- [x] OAuth2, JWT, role-based access control (RBAC), API Gateway s autentizací.
- [ ] Pouze pomocí firewallu na síťové vrstvě
- [ ] Šifrováním zdrojového kódu služeb
- [ ] N/A

### Jak monitorovat mikroservisní architekturu?
- [x] Použitím Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), OpenTelemetry.
- [ ] Pouze manuální kontrolou logů na serveru
- [ ] Monitorování není v mikroservisách potřeba
- [ ] N/A

### Jaké jsou běžné způsoby logování v mikroservisní architektuře?
- [x] Distribuované logování (ELK, Loki), strukturované logy (JSON), korelace logů pomocí Trace ID.
- [ ] Ukládání logů pouze do lokálních souborů
- [ ] Logování se v mikroservisách nepoužívá
- [ ] N/A

### Jaký je rozdíl mezi Load Balancerem a Service Mesh?
- [x] Load Balancer rozkládá zátěž na servery, Service Mesh řídí síťovou komunikaci mezi mikroservisami.
- [ ] Load Balancer a Service Mesh jsou totéž
- [ ] Service Mesh je typ databáze
- [ ] N/A

### Co je Istio a jak se používá v mikroservisní architektuře?
- [x] Istio je service mesh pro řízení komunikace mezi službami, poskytuje monitoring, bezpečnost, circuit breaking.
- [ ] Istio je programovací jazyk pro mikroservisy
- [ ] Istio je cloudová databáze
- [ ] N/A

### Jak mikroservisy zvládají automatické škálování?
- [x] Pomocí Kubernetes Horizontal Pod Autoscaler (HPA), auto-scaling skupin v cloudu.
- [ ] Manuálním přidáváním serverů administrátorem
- [ ] Automatické škálování mikroservisy nepodporují
- [ ] N/A

### Jaký je rozdíl mezi event-driven architekturou a request-response komunikací?
- [x] Event-driven model funguje na principu asynchronních zpráv, request-response model vyžaduje okamžitou odpověď.
- [ ] Event-driven architektura je vždy pomalejší
- [ ] Request-response komunikace neumožňuje zpracování chyb
- [ ] N/A

### Jaké jsou nejčastější chyby při návrhu mikroservisní architektury?
- [x] Špatná granularita služeb, příliš mnoho synchronních volání, absence centralizovaného logování a monitoring.
- [ ] Použití příliš malého počtu služeb
- [ ] Implementace automatického škálování
- [ ] N/A

### Jak funguje distribuce konfigurace v mikroservisní architektuře?
- [x] Pomocí nástrojů jako Spring Cloud Config, Consul nebo Kubernetes ConfigMaps.
- [ ] Hardcoded konfigurace přímo v kódu každé služby
- [ ] Zasílání konfigurace e-mailem administrátorům
- [ ] N/A

### Jak se řeší problém závislostí mezi mikroservisami?
- [x] Pomocí asynchronní komunikace, event-driven designu a verzování API.
- [ ] Sdílením jedné databáze mezi všemi službami
- [ ] Závislosti mezi mikroservisami nelze řešit
- [ ] N/A

### Jak lze minimalizovat latenci v mikroservisní architektuře?
- [x] Použitím caching, optimalizací dotazů a load balancingem.
- [ ] Přidáním více síťových hopů mezi službami
- [ ] Zvýšením počtu synchronních volání
- [ ] N/A

### Jaké jsou výhody decentralizovaného logování?
- [x] Možnost sledování logů napříč celým systémem pomocí ELK stacku, Loki nebo Splunk.
- [ ] Logy jsou přístupné pouze z jednoho serveru
- [ ] Decentralizované logování ztěžuje debugging
- [ ] N/A

### Jaké jsou hlavní metody testování mikroservis?
- [x] Unit testy, integrační testy, contract testing (Pact), end-to-end testy.
- [ ] Pouze manuální testování v produkci
- [ ] Testování mikroservis není možné
- [ ] N/A

### Co je Sidecar pattern a proč se používá?
- [x] Sidecar pattern umožňuje přidání doplňkových funkcí jako monitoring, bezpečnost a routing bez úprav hlavní služby.
- [ ] Pattern pro sdílení databáze mezi dvěma službami
- [ ] Způsob jak spustit dvě verze služby současně
- [ ] N/A

### Jak mikroservisy zvládají rollback v případě selhání nasazení?
- [x] Použitím Canary Deployment, Blue-Green Deployment nebo Feature Toggles.
- [ ] Manuálním zásahem administrátora při každém selhání
- [ ] Rollback v mikroservisách není možný
- [ ] N/A

### Jak funguje federovaný monitoring v mikroservisní architektuře?
- [x] Každá služba sbírá metriky a logy, které jsou centralizovány v monitoringových nástrojích.
- [ ] Monitoring probíhá pouze na jednom centrálním serveru
- [ ] Federovaný monitoring vyžaduje vypnutí všech služeb
- [ ] N/A

### Jaké jsou běžné strategie pro nasazování mikroservis?
- [x] Rolling Updates, Canary Releases, Blue-Green Deployments.
- [ ] Pouze manuální nasazení na produkční servery
- [ ] Vždy nasadit všechny služby najednou
- [ ] N/A

### Jak mikroservisy zvládají závislosti na jiných službách?
- [x] Použitím Circuit Breaker patternu, retry mechanizmů a fallback strategií.
- [ ] Ignorováním chyb v závislých službách
- [ ] Závislosti mezi službami se neřeší
- [ ] N/A

### Jak lze zajistit kompatibilitu API mezi verzemi mikroservis?
- [x] Použitím API Gateway s verzováním a backward compatibility strategií.
- [ ] Vždy měnit API bez ohledu na existující klienty
- [ ] Kompatibilita API není v mikroservisách důležitá
- [ ] N/A

### Co je CQRS a proč se používá v mikroservisách?
- [x] CQRS odděluje čtecí a zápisovou logiku pro lepší škálovatelnost a výkon.
- [ ] CQRS je databázový engine pro mikroservisy
- [ ] CQRS slouží pouze pro logování
- [ ] N/A

### Jak řešit problém single point of failure v mikroservisách?
- [x] Použitím redundance, failover strategií a load balancingu.
- [ ] Spoléháním na jeden centrální server
- [ ] Single point of failure nelze v mikroservisách řešit
- [ ] N/A

### Jak funguje event sourcing v mikroservisní architektuře?
- [x] Místo ukládání pouze aktuálního stavu se zaznamenává sekvence událostí.
- [ ] Ukládání pouze posledního stavu entity
- [ ] Event sourcing je způsob logování chyb
- [ ] N/A

### Jaký je rozdíl mezi synchronní a asynchronní komunikací v mikroservisách?
- [x] Synchronní komunikace vyžaduje okamžitou odpověď, asynchronní používá zprávy a eventy.
- [ ] Synchronní komunikace je vždy bezpečnější
- [ ] Asynchronní komunikace blokuje volající službu
- [ ] N/A

### Jaké jsou bezpečnostní hrozby v mikroservisní architektuře?
- [x] API útoky, neautorizovaný přístup, závislost na třetích stranách, man-in-the-middle útoky.
- [ ] Mikroservisy jsou imunní vůči bezpečnostním hrozbám
- [ ] Jediná hrozba je výpadek elektřiny
- [ ] N/A

### Jak řešit rate limiting v mikroservisách?
- [x] Pomocí API Gateway, Redis Rate Limiteru nebo Nginx Rate Limiting.
- [ ] Rate limiting se v mikroservisách nepoužívá
- [ ] Omezením počtu uživatelů aplikace
- [ ] N/A

### Jak funguje JWT v mikrosroervisní architektuře?
- [x] JWT umožňuje decentralizovanou autentizaci a autorizaci mezi mikroservisami.
- [ ] JWT slouží pouze pro šifrování databáze
- [ ] JWT je protokol pro přenos souborů
- [ ] N/A

### Jaké jsou hlavní rozdíly mezi mikroservisami a serverless architekturou?
- [x] Mikroservisy běží kontinuálně, serverless funkce se spouštějí pouze na vyžádání.
- [ ] Serverless architektura vyžaduje více serverů
- [ ] Mikroservisy nelze škálovat automaticky
- [ ] N/A

### Jak implementovat bezpečnou komunikaci mezi mikroservisami?
- [x] Použitím TLS, mutual TLS (mTLS) a API gateway s autentizací.
- [ ] Posíláním nešifrovaných HTTP požadavků
- [ ] Bezpečná komunikace není v mikroservisách potřeba
- [ ] N/A

### Jak se řeší konzistence dat mezi mikroservisami?
- [x] Pomocí event sourcingu, eventual consistency a SAGA patternu.
- [ ] Použitím jedné sdílené databáze s globálními zámky
- [ ] Konzistence dat není v mikroservisách možná
- [ ] N/A

### Jak funguje reverse proxy v mikroservisní architektuře?
- [x] Reverse proxy směruje požadavky klientů na správné mikroservisy.
- [ ] Reverse proxy ukládá data do databáze
- [ ] Reverse proxy generuje zdrojový kód služeb
- [ ] N/A

### Jaký je rozdíl mezi Kubernetes Ingress a API Gateway?
- [x] Ingress poskytuje základní směrování provozu, API Gateway přidává autentizaci, rate limiting a caching.
- [ ] Ingress a API Gateway jsou totéž
- [ ] API Gateway nelze použít s Kubernetes
- [ ] N/A

### Jaký je rozdíl mezi monorepo a multirepo přístupem v mikroservisách?
- [x] Monorepo uchovává kód všech služeb v jednom repozitáři, multirepo má každou službu v separátním repozitáři.
- [ ] Monorepo je vždy lepší volba
- [ ] Multirepo neumožňuje verzování kódu
- [ ] N/A

### Jak zajistit vysokou dostupnost v mikroservisní architektuře?
- [x] Použitím automatického škálování, load balancingu a redundantních instancí.
- [ ] Spuštěním všech služeb na jednom serveru
- [ ] Vysoká dostupnost není v mikroservisách možná
- [ ] N/A

### Jaké jsou nejlepší nástroje pro správu mikroservis?
- [x] Kubernetes, Istio, Consul, Prometheus, OpenTelemetry.
- [ ] Pouze textový editor a FTP klient
- [ ] Mikroservisy nevyžadují žádné nástroje
- [ ] N/A

### Jak implementovat zero-downtime deployment pro mikroservisy?
- [x] Použitím Rolling Updates, Canary Releases nebo Feature Toggles.
- [ ] Vypnutím všech služeb během nasazení
- [ ] Zero-downtime deployment není možný
- [ ] N/A

### Jak funguje Distributed Tracing v mikroservisní architektuře?
- [x] Pomocí OpenTelemetry, Jaeger nebo Zipkin pro sledování požadavků napříč službami.
- [ ] Distributed tracing sleduje pouze chyby v databázi
- [ ] Tracing není v mikroservisách potřeba
- [ ] N/A

### Jak mikroservisy zvládají globální konfiguraci?
- [x] Použitím centralizovaných konfigurací jako Spring Cloud Config, HashiCorp Consul nebo Kubernetes ConfigMaps.
- [ ] Hardcoded hodnoty v každé službě
- [ ] Globální konfigurace není v mikroservisách možná
- [ ] N/A

### Jaké jsou hlavní faktory pro rozhodování mezi monolitem a mikroservisami?
- [x] Počet vývojářů, škálovatelnost, komplexita systému, potřeba nezávislého nasazování.
- [ ] Pouze cena cloudových služeb
- [ ] Barva loga společnosti
- [ ] N/A

## Asynchronous Communication

### Co je asynchronní komunikace a proč se používá?
- [x] Asynchronní komunikace umožňuje systémům komunikovat bez čekání na okamžitou odpověď, což zlepšuje škálovatelnost a výkon.
- [ ] Komunikace vyžadující okamžitou odpověď od serveru
- [ ] Způsob synchronizace databází v reálném čase
- [ ] N/A

### Jaké jsou hlavní rozdíly mezi synchronní a asynchronní komunikací?
- [x] Synchronní komunikace vyžaduje okamžitou odpověď, zatímco asynchronní umožňuje zpracování požadavků v budoucnu.
- [ ] Synchronní komunikace je vždy pomalejší
- [ ] Asynchronní komunikace blokuje volající proces
- [ ] N/A

### Jaké jsou hlavní výhody asynchronní komunikace?
- [x] Zvýšení škálovatelnosti, snížení latence, lepší odolnost proti výpadkům a možnost zpracování úloh na pozadí.
- [ ] Jednodušší implementace než synchronní komunikace
- [ ] Nižší nároky na paměť serveru
- [ ] N/A

### Jaké technologie se běžně používají pro asynchronní komunikaci?
- [x] Apache Kafka, RabbitMQ, ActiveMQ, Amazon SQS, Google Pub/Sub, Redis Streams.
- [ ] Pouze HTTP REST API
- [ ] FTP a SMTP protokoly
- [ ] N/A

### Co je message queue a jak funguje?
- [x] Message queue ukládá zprávy, které jsou zpracovány přijímačem později, což umožňuje oddělení producenta a konzumenta.
- [ ] Databáze pro ukládání uživatelských dat
- [ ] Způsob řazení SQL dotazů
- [ ] N/A

### Jak funguje publish-subscribe model?
- [x] Vydavatel (publisher) publikuje zprávy do tématu, odběratelé (subscribers) dostávají všechny zprávy spojené s tímto tématem.
- [ ] Každá zpráva je doručena pouze jednomu odběrateli
- [ ] Odběratelé musí aktivně dotazovat vydavatele
- [ ] N/A

### Co je event-driven architektura?
- [x] Model, kde se akce systému řídí událostmi místo přímých požadavků.
- [ ] Architektura založená na pravidelném pollingu
- [ ] Způsob organizace databázových tabulek
- [ ] N/A

### Jaký je rozdíl mezi event-driven a message-driven architekturou?
- [x] Event-driven propaguje události, které mohou ovlivnit více služeb, message-driven pracuje s explicitními zprávami mezi konkrétními službami.
- [ ] Event-driven a message-driven jsou totéž
- [ ] Message-driven architektura nepoužívá fronty
- [ ] N/A

### Jak lze zajistit garantované doručení zpráv v asynchronní komunikaci?
- [x] Použitím potvrzení (ACK/NACK), dead-letter queues a retry mechanisms.
- [ ] Odesláním zprávy pouze jednou bez potvrzení
- [ ] Garantované doručení není možné
- [ ] N/A

### Co je idempotence v asynchronním zpracování zpráv?
- [x] Idempotence znamená, že opakované zpracování stejné zprávy nepovede ke změně stavu.
- [ ] Schopnost zpracovat více zpráv současně
- [ ] Automatické mazání duplicitních zpráv
- [ ] N/A

### Co je dead-letter queue (DLQ) a proč se používá?
- [x] Speciální fronta pro zprávy, které nebyly úspěšně zpracovány po určitém počtu pokusů.
- [ ] Fronta pro archivaci starých zpráv
- [ ] Hlavní fronta pro všechny zprávy
- [ ] N/A

### Jak se řeší sekvence zpráv v asynchronní komunikaci?
- [x] Použitím FIFO queue (First In First Out) nebo partition keys (Kafka).
- [ ] Sekvence zpráv nelze garantovat
- [ ] Zprávy jsou vždy zpracovány náhodně
- [ ] N/A

### Co je transactional messaging?
- [x] Mechanismus zajišťující, že zprávy jsou zpracovány atomicky v rámci transakce.
- [ ] Posílání zpráv bez potvrzení
- [ ] Způsob šifrování zpráv
- [ ] N/A

### Jak funguje retry mechanismus v asynchronní komunikaci?
- [x] Pomocí exponential backoff, dead-letter queues nebo circuit breaker patternu.
- [ ] Opakované pokusy se nikdy nepoužívají
- [ ] Retry probíhá vždy okamžitě bez čekání
- [ ] N/A

### Co je fan-out pattern?
- [x] Jeden producent posílá zprávy více odběratelům současně.
- [ ] Více producentů posílá zprávy jednomu odběrateli
- [ ] Způsob komprese zpráv
- [ ] N/A

### Jaké jsou výzvy při škálování asynchronních systémů?
- [x] Řízení pořadí zpráv, zajištění doručení pouze jednou (exactly-once) a řízení zatížení.
- [ ] Asynchronní systémy nelze škálovat
- [ ] Škálování je vždy automatické bez výzev
- [ ] N/A

### Jak funguje priority queue v message brokerech?
- [x] Umožňuje zpracovávat důležitější zprávy před méně důležitými.
- [ ] Všechny zprávy mají stejnou prioritu
- [ ] Priority queue řadí zprávy podle velikosti
- [ ] N/A

### Jak lze sledovat zprávy v distribuovaných systémech?
- [x] Pomocí distributed tracing (OpenTelemetry, Jaeger) a korelace zpráv pomocí unikátních ID.
- [ ] Sledování zpráv není možné
- [ ] Pouze manuální kontrolou logů
- [ ] N/A

### Jak zajistit bezpečnost v asynchronní komunikaci?
- [x] Šifrováním zpráv, autentizací pomocí OAuth2, TLS a řízením přístupu na základě rolí.
- [ ] Bezpečnost není v asynchronní komunikaci potřeba
- [ ] Pouze pomocí firewallu
- [ ] N/A

### Co je back-pressure a jak se řeší?
- [x] Mechanismus řízení toku dat pro zabránění přetížení systému, řešený pomocí rate limiting nebo load shedding.
- [ ] Způsob komprese dat při přenosu
- [ ] Technika pro zrychlení zpracování zpráv
- [ ] N/A

### Jaké jsou hlavní metriky pro monitoring asynchronní komunikace?
- [x] Latence, throughput, počet nevyřízených zpráv, error rate.
- [ ] Pouze počet odeslaných zpráv
- [ ] Metriky se v asynchronní komunikaci nesledují
- [ ] N/A

### Jaký je rozdíl mezi choreografií a orchestrací v event-driven systémech?
- [x] Choreografie umožňuje jednotlivým službám reagovat na události nezávisle, zatímco orchestrace řídí workflow centrálně.
- [ ] Choreografie a orchestrace jsou totéž
- [ ] Orchestrace neumožňuje centrální řízení
- [ ] N/A

### Jak funguje distributed event processing?
- [x] Data jsou zpracovávána paralelně na různých uzlech pro zvýšení výkonu a dostupnosti.
- [ ] Všechny události jsou zpracovány na jednom serveru
- [ ] Distributed processing znamená sekvenční zpracování
- [ ] N/A

### Jaké jsou příklady reálného použití asynchronní komunikace?
- [x] Zpracování plateb, notifikace, logování, IoT messaging.
- [ ] Pouze pro interní testování
- [ ] Asynchronní komunikace se v praxi nepoužívá
- [ ] N/A

### Jak implementovat asynchronní API?
- [x] Použitím WebSockets, polling, Webhooks nebo server-sent events.
- [ ] Pouze pomocí synchronních HTTP volání
- [ ] Asynchronní API nelze implementovat
- [ ] N/A

### Jaký je rozdíl mezi stream processing a batch processing?
- [x] Stream processing zpracovává data v reálném čase, batch processing v dávkách.
- [ ] Stream processing a batch processing jsou totéž
- [ ] Batch processing je vždy rychlejší
- [ ] N/A

### Jak funguje exactly-once zpracování v asynchronních systémech?
- [x] Kombinací idempotence, deduplikace a transactional messaging.
- [ ] Exactly-once zpracování není možné
- [ ] Automaticky bez jakékoli konfigurace
- [ ] N/A

### Jak optimalizovat asynchronní zpracování zpráv?
- [x] Použitím paralelizace, optimalizací spotřebitelských skupin a škálování producentů.
- [ ] Snížením počtu konzumentů
- [ ] Vypnutím potvrzování zpráv
- [ ] N/A

### Jaký je rozdíl mezi Kafka a RabbitMQ?
- [x] Kafka je distribuovaná logovací platforma s vysokou propustností, RabbitMQ je message broker vhodný pro více patternů.
- [ ] Kafka a RabbitMQ jsou totéž
- [ ] RabbitMQ má vyšší propustnost než Kafka
- [ ] N/A

### Jaký je rozdíl mezi event-driven a command-driven architekturou?
- [x] Event-driven systém reaguje na události, command-driven systém provádí explicitní příkazy.
- [ ] Event-driven a command-driven jsou totéž
- [ ] Command-driven architektura nepoužívá zprávy
- [ ] N/A

## javax.concurrent

### Co je java.util.concurrent a jaké problémy řeší?
- [x] java.util.concurrent poskytuje sadu nástrojů pro správu souběžného zpracování v Javě, což usnadňuje práci s více vlákny a synchronizací.
- [ ] Knihovna pro práci s databázemi
- [ ] Nástroj pro generování dokumentace
- [ ] N/A

### Jaký je rozdíl mezi synchronized a Lock v java.util.concurrent?
- [x] synchronized je jednoduchý, ale blokuje vlákna; Lock poskytuje větší kontrolu a umožňuje přerušení čekání.
- [ ] synchronized a Lock jsou totéž
- [ ] Lock je pomalejší než synchronized
- [ ] N/A

### Co je ExecutorService a k čemu slouží?
- [x] ExecutorService umožňuje efektivní správu vláken a plánování úloh bez nutnosti explicitního vytváření nových vláken.
- [ ] Služba pro spouštění SQL dotazů
- [ ] Nástroj pro správu souborů
- [ ] N/A

### Jak funguje ThreadPoolExecutor?
- [x] ThreadPoolExecutor umožňuje definovat velikost poolu vláken a strategii přidělování úloh.
- [ ] Vytváří nové vlákno pro každý požadavek
- [ ] ThreadPoolExecutor slouží pouze pro logování
- [ ] N/A

### Co je ForkJoinPool a jak se liší od běžného ThreadPoolExecutor?
- [x] ForkJoinPool je optimalizovaný pro rekurzivní rozdělování úloh (divide-and-conquer) pomocí ForkJoinTask.
- [ ] ForkJoinPool a ThreadPoolExecutor jsou totéž
- [ ] ForkJoinPool neumožňuje paralelní zpracování
- [ ] N/A

### Jaký je rozdíl mezi Callable a Runnable?
- [x] Callable vrací hodnotu a může vyvolat výjimku, zatímco Runnable nic nevrací a nemůže vyhazovat checked výjimky.
- [ ] Callable a Runnable jsou totéž
- [ ] Runnable může vracet hodnoty
- [ ] N/A

### Co je Future v java.util.concurrent?
- [x] Future představuje výsledek asynchronní operace, umožňuje zjištění stavu a získání výsledku.
- [ ] Třída pro práci s datem a časem
- [ ] Nástroj pro predikci budoucích hodnot
- [ ] N/A

### Jak funguje CompletableFuture a jak se liší od Future?
- [x] CompletableFuture rozšiřuje Future o možnost skládání asynchronních operací a callbacky.
- [ ] CompletableFuture a Future jsou totéž
- [ ] CompletableFuture nepodporuje asynchronní operace
- [ ] N/A

### Co je ScheduledExecutorService?
- [x] ScheduledExecutorService umožňuje plánování úloh ke spuštění po určité době nebo v opakovaných intervalech.
- [ ] Služba pro okamžité spuštění úloh
- [ ] Nástroj pro správu kalendáře
- [ ] N/A

### Jak funguje CountDownLatch a k čemu se používá?
- [x] CountDownLatch umožňuje jednomu nebo více vláknům čekat na dokončení operací jiných vláken.
- [ ] Počítadlo pro sledování počtu vláken
- [ ] Nástroj pro odpočítávání času
- [ ] N/A

### Co je CyclicBarrier a jak se liší od CountDownLatch?
- [x] CyclicBarrier umožňuje synchronizaci více vláken opakovaně, zatímco CountDownLatch je jednorázový.
- [ ] CyclicBarrier a CountDownLatch jsou totéž
- [ ] CountDownLatch lze použít opakovaně
- [ ] N/A

### Jaký je rozdíl mezi Semaphore a Lock?
- [x] Semaphore omezuje počet souběžných přístupů ke zdroji, zatímco Lock řídí přístup jednoho vlákna k určité sekci kódu.
- [ ] Semaphore a Lock jsou totéž
- [ ] Lock umožňuje více souběžných přístupů
- [ ] N/A

### Jak funguje ReentrantLock a kdy jej použít?
- [x] ReentrantLock umožňuje větší kontrolu nad zámky, včetně možnosti pokusit se získat zámek bez zablokování.
- [ ] ReentrantLock nelze znovu získat stejným vláknem
- [ ] ReentrantLock je pomalejší než synchronized
- [ ] N/A

### Jaké jsou výhody ReadWriteLock oproti ReentrantLock?
- [x] ReadWriteLock umožňuje současné čtení více vlákny, zatímco zápis je exkluzivní.
- [ ] ReadWriteLock blokuje všechna vlákna při čtení
- [ ] ReentrantLock je vždy lepší volba
- [ ] N/A

### Jaké jsou hlavní výhody ConcurrentHashMap oproti HashMap?
- [x] ConcurrentHashMap podporuje souběžné přístupy bez nutnosti explicitní synchronizace.
- [ ] ConcurrentHashMap je pomalejší než HashMap
- [ ] HashMap podporuje souběžné přístupy lépe
- [ ] N/A

### Jaký je rozdíl mezi BlockingQueue a běžnou Queue?
- [x] BlockingQueue podporuje blokování při vkládání a odebírání prvků, což je užitečné pro synchronizaci mezi vlákny.
- [ ] BlockingQueue a Queue jsou totéž
- [ ] Queue podporuje blokování automaticky
- [ ] N/A

### Jak funguje LinkedBlockingQueue oproti ArrayBlockingQueue?
- [x] LinkedBlockingQueue umožňuje dynamickou velikost, zatímco ArrayBlockingQueue má pevně stanovenou kapacitu.
- [ ] LinkedBlockingQueue a ArrayBlockingQueue jsou totéž
- [ ] ArrayBlockingQueue má dynamickou velikost
- [ ] N/A

### Co je Exchanger a jak se používá?
- [x] Exchanger umožňuje dvěma vláknům bezpečně vyměnit data.
- [ ] Nástroj pro výměnu souborů mezi servery
- [ ] Třída pro konverzi měn
- [ ] N/A

### Jak funguje ThreadLocal a jaké jsou jeho výhody a nevýhody?
- [x] ThreadLocal ukládá hodnoty specifické pro každé vlákno, ale může způsobovat úniky paměti, pokud není správně vyčištěn.
- [ ] ThreadLocal sdílí hodnoty mezi všemi vlákny
- [ ] ThreadLocal nemá žádné nevýhody
- [ ] N/A

### Co je StampedLock a jak se liší od ReadWriteLock?
- [x] StampedLock poskytuje efektivnější přístup k datům pomocí optimistických zámků.
- [ ] StampedLock a ReadWriteLock jsou totéž
- [ ] StampedLock nepodporuje optimistické zamykání
- [ ] N/A

### Jaké jsou hlavní výzvy při práci se souběžným programováním?
- [x] Race conditions, deadlocky, livelocky a problémy s viditelností dat.
- [ ] Souběžné programování nemá žádné výzvy
- [ ] Pouze výkon aplikace
- [ ] N/A

### Jak detekovat a předcházet deadlockům?
- [x] Použitím timeoutů, pořadí získávání zámků a dynamické prevence.
- [ ] Deadlockům nelze předcházet
- [ ] Použitím více zámků současně
- [ ] N/A

### Jak funguje Phaser a jak se liší od CyclicBarrier?
- [x] Phaser umožňuje dynamické přidávání a odebírání účastníků synchronizace.
- [ ] Phaser a CyclicBarrier jsou totéž
- [ ] CyclicBarrier podporuje dynamické přidávání účastníků
- [ ] N/A

### Jak lze efektivně ladit souběžné aplikace?
- [x] Použitím thread dumpu, nástrojů jako VisualVM, JConsole a specializovaných testovacích rámců.
- [ ] Ladění souběžných aplikací není možné
- [ ] Pouze pomocí println příkazů
- [ ] N/A

### Jaké jsou best practices pro práci s java.util.concurrent?
- [x] Používat vysoce úrovňové API jako ExecutorService, minimalizovat sdílení stavů, správně spravovat zámky a využívat thread-safe datové struktury.
- [ ] Vždy vytvářet nová vlákna ručně
- [ ] Používat pouze synchronized bloky
- [ ] N/A

### Jak funguje CompletionService a kdy se používá?
- [x] CompletionService umožňuje efektivní správu více asynchronních úloh a jejich zpracování v pořadí, v jakém jsou dokončeny.
- [ ] CompletionService slouží pouze pro jednu úlohu
- [ ] CompletionService je zastaralé API
- [ ] N/A

### Co je ForkJoinTask a jaký je jeho účel?
- [x] ForkJoinTask je abstrakce pro úlohy v ForkJoinPool, která umožňuje rozdělování a kombinaci výpočtů.
- [ ] ForkJoinTask slouží pro sekvenční zpracování
- [ ] ForkJoinTask je typ kolekce
- [ ] N/A

### Jaký je rozdíl mezi ForkJoinPool a ExecutorService?
- [x] ForkJoinPool je optimalizován pro úlohy typu divide-and-conquer, zatímco ExecutorService spravuje obecné úlohy v pevném poolu vláken.
- [ ] ForkJoinPool a ExecutorService jsou totéž
- [ ] ExecutorService je lepší pro divide-and-conquer
- [ ] N/A

### Jak lze implementovat thread-safe cache v java.util.concurrent?
- [x] Použitím ConcurrentHashMap, AtomicReference nebo kombinací ReadWriteLock s HashMap.
- [ ] Použitím běžné HashMap bez synchronizace
- [ ] Thread-safe cache nelze implementovat
- [ ] N/A

### Jak zajistit efektivní synchronizaci mezi více vlákny?
- [x] Použitím správného synchronizačního mechanismu (Lock, Semaphore, CountDownLatch), minimalizací sdílených dat a použitím neměnných objektů (Immutable).
- [ ] Synchronizace mezi vlákny není potřeba
- [ ] Použitím pouze globálních proměnných
- [ ] N/A

## Git/GitHub

### Co je Git a k čemu slouží?
- [x] Git je distribuovaný verzovací systém umožňující sledování změn v kódu.
- [ ] Cloudová platforma pro hostování webových stránek
- [ ] Programovací jazyk pro webové aplikace
- [ ] N/A

### Jaký je rozdíl mezi Git a GitHub?
- [x] Git je nástroj pro verzování, GitHub je cloudová platforma pro správu repozitářů.
- [ ] Git a GitHub jsou totéž
- [ ] GitHub je desktopová aplikace pro Git
- [ ] N/A

### Jak vytvořit nový Git repozitář?
- [x] Pomocí git init pro lokální repozitář nebo git clone pro klonování existujícího repozitáře.
- [ ] Pomocí git create
- [ ] Pomocí git new
- [ ] N/A

### Jak přidat soubory do staging area?
- [x] Použitím git add <soubor> nebo git add . pro všechny změněné soubory.
- [ ] Použitím git stage <soubor>
- [ ] Použitím git include <soubor>
- [ ] N/A

### Jak potvrdit změny v Git repozitáři?
- [x] Použitím git commit -m "Popis změny".
- [ ] Použitím git save -m "Popis změny"
- [ ] Použitím git confirm -m "Popis změny"
- [ ] N/A

### Jak odeslat změny na vzdálený repozitář?
- [x] Pomocí git push origin <branch>.
- [ ] Pomocí git send origin <branch>
- [ ] Pomocí git upload origin <branch>
- [ ] N/A

### Jak stáhnout změny z repozitáře?
- [x] Použitím git pull nebo git fetch a následným git merge.
- [ ] Použitím git download
- [ ] Použitím git sync
- [ ] N/A

### Jak zobrazit historii commitů?
- [x] Použitím git log.
- [ ] Použitím git history
- [ ] Použitím git show-commits
- [ ] N/A

### Jak vytvořit novou větev v Gitu?
- [x] Pomocí git branch <název_větve>.
- [ ] Pomocí git new-branch <název_větve>
- [ ] Pomocí git create-branch <název_větve>
- [ ] N/A

### Jak přepnout větev?
- [x] Použitím git checkout <název_větve> nebo git switch <název_větve>.
- [ ] Použitím git change <název_větve>
- [ ] Použitím git goto <název_větve>
- [ ] N/A

### Jak sloučit dvě větve?
- [x] Pomocí git merge <název_větve>.
- [ ] Pomocí git combine <název_větve>
- [ ] Pomocí git join <název_větve>
- [ ] N/A

### Co je rebase a jak funguje?
- [x] git rebase přepisuje historii commitů tak, aby byly aplikovány na jinou větev.
- [ ] git rebase vytváří zálohu repozitáře
- [ ] git rebase maže všechny commity
- [ ] N/A

### Jak odstranit větev?
- [x] Lokálně: git branch -d <název_větve>, na vzdáleném repozitáři: git push origin --delete <název_větve>.
- [ ] Lokálně: git remove-branch <název_větve>
- [ ] Lokálně: git delete <název_větve>
- [ ] N/A

### Co je git stash a jak jej použít?
- [x] git stash dočasně ukládá necommitované změny.
- [ ] git stash trvale maže změny
- [ ] git stash vytváří novou větev
- [ ] N/A

### Jak obnovit změny ze stashe?
- [x] Použitím git stash pop nebo git stash apply.
- [ ] Použitím git stash restore
- [ ] Použitím git stash get
- [ ] N/A

### Jak vrátit commit?
- [x] Použitím git revert <hash> pro reverzní commit nebo git reset <hash> pro reset historie.
- [ ] Použitím git undo <hash>
- [ ] Použitím git rollback <hash>
- [ ] N/A

### Jaký je rozdíl mezi git revert a git reset?
- [x] git revert vytvoří nový commit s obrácenými změnami, git reset přepíše historii commitů.
- [ ] git revert a git reset jsou totéž
- [ ] git reset vytváří nový commit
- [ ] N/A

### Jak zobrazit změny mezi commity?
- [x] Použitím git diff.
- [ ] Použitím git compare
- [ ] Použitím git changes
- [ ] N/A

### Co je git cherry-pick a k čemu slouží?
- [x] Přenesení konkrétního commitu do jiné větve.
- [ ] Výběr nejlepšího commitu z historie
- [ ] Mazání nepotřebných commitů
- [ ] N/A

### Jak nastavit vzdálený repozitář?
- [x] Použitím git remote add origin <URL>.
- [ ] Použitím git set-remote origin <URL>
- [ ] Použitím git connect origin <URL>
- [ ] N/A

### Jak odstranit soubor z Git historie?
- [x] Použitím git rm --cached <soubor> a následným commitem.
- [ ] Použitím git delete-history <soubor>
- [ ] Použitím git purge <soubor>
- [ ] N/A

### Jak vytvořit pull request na GitHubu?
- [x] Vytvořením nové větve, pushnutím změn a následným vytvořením PR na GitHubu.
- [ ] Použitím git pull-request
- [ ] Použitím git create-pr
- [ ] N/A

### Jaké jsou rozdíly mezi fork a clone?
- [x] clone stáhne repozitář lokálně, fork vytvoří kopii repozitáře v GitHub účtu.
- [ ] fork a clone jsou totéž
- [ ] clone vytváří kopii na GitHubu
- [ ] N/A

### Jak vytvořit Git tag?
- [x] Použitím git tag -a v1.0 -m "Popis tagu".
- [ ] Použitím git label -a v1.0
- [ ] Použitím git mark -a v1.0
- [ ] N/A

### Jak sdílet tag s ostatními?
- [x] Použitím git push origin --tags.
- [ ] Použitím git share-tags
- [ ] Použitím git publish-tags
- [ ] N/A

### Co je .gitignore a jak se používá?
- [x] Soubor určující, které soubory Git nemá sledovat.
- [ ] Soubor s konfigurací Git serveru
- [ ] Soubor pro šifrování repozitáře
- [ ] N/A

### Jak přejmenovat větev?
- [x] Lokálně: git branch -m <nový_název>, vzdáleně: git push origin -u <nový_název>.
- [ ] Lokálně: git rename-branch <nový_název>
- [ ] Lokálně: git mv-branch <nový_název>
- [ ] N/A

### Jak zjistit, kdo naposledy upravil konkrétní řádek kódu?
- [x] Pomocí git blame <soubor>.
- [ ] Pomocí git who <soubor>
- [ ] Pomocí git author <soubor>
- [ ] N/A

### Jak opravit konflikt při slučování větví?
- [x] Ručně upravit soubor, potvrdit změny pomocí git add, a dokončit merge commit.
- [ ] Použitím git auto-resolve
- [ ] Konflikt se opraví automaticky
- [ ] N/A

### Jak vrátit soubor do původního stavu před změnami?
- [x] Použitím git checkout -- <soubor> nebo git restore <soubor>.
- [ ] Použitím git undo-file <soubor>
- [ ] Použitím git reset-file <soubor>
- [ ] N/A

## Testing (JUnit, Spock)

### Co je JUnit a k čemu slouží?
- [x] JUnit je testovací framework pro Javu, který umožňuje psaní a spouštění unit testů.
- [ ] JUnit je databázový framework
- [ ] JUnit je webový server
- [ ] N/A

### Jaký je rozdíl mezi JUnit 4 a JUnit 5?
- [x] JUnit 5 přinesl modulární architekturu, vylepšené anotace a rozšířenou podporu dynamického testování.
- [ ] JUnit 4 a JUnit 5 jsou totéž
- [ ] JUnit 5 nepodporuje anotace
- [ ] N/A

### Jaké jsou hlavní anotace v JUnit?
- [x] @Test, @BeforeEach, @AfterEach, @BeforeAll, @AfterAll, @Disabled, @ParameterizedTest.
- [ ] Pouze @Test a @Run
- [ ] @Execute, @Setup, @Cleanup
- [ ] N/A

### Jak se v JUnit asertují hodnoty?
- [x] Pomocí metod jako Assertions.assertEquals(expected, actual), assertTrue(), assertThrows().
- [ ] Pomocí System.out.println()
- [ ] Pomocí return statement
- [ ] N/A

### Jak funguje @ParameterizedTest v JUnit?
- [x] Umožňuje spouštět testy s různými vstupními daty.
- [ ] Spouští test pouze jednou
- [ ] Parametrizované testy JUnit nepodporuje
- [ ] N/A

### Co je Spock a jak se liší od JUnit?
- [x] Spock je testovací framework pro Groovy, který umožňuje čitelnější DSL syntax a podporuje behaviorální testy.
- [ ] Spock a JUnit jsou totéž
- [ ] Spock je pouze pro unit testy
- [ ] N/A

### Jak v Spocku definovat testovací scénář?
- [x] Pomocí bloků jako given, when, then, where.
- [ ] Pomocí anotace @Test
- [ ] Pomocí metody runTest()
- [ ] N/A

### Jak lze v JUnit vytvořit mock objekt?
- [x] Pomocí knihovny Mockito: @Mock, Mockito.mock(), Mockito.when(), @InjectMocks.
- [ ] Mock objekty JUnit nepodporuje
- [ ] Pomocí new Mock()
- [ ] N/A

### Jaký je rozdíl mezi @Mock a @Spy v Mockito?
- [x] @Mock vytváří falešný objekt, @Spy zachovává původní chování objektu s možností přepsání.
- [ ] @Mock a @Spy jsou totéž
- [ ] @Spy vytváří falešný objekt
- [ ] N/A

### Jak lze testovat výjimky v JUnit?
- [x] Pomocí assertThrows(Exception.class, () -> {...}).
- [ ] Pomocí try-catch v testu
- [ ] Výjimky nelze v JUnit testovat
- [ ] N/A

### Jak fungují @BeforeEach a @AfterEach v JUnit?
- [x] @BeforeEach se spustí před každým testem, @AfterEach po každém testu.
- [ ] @BeforeEach a @AfterEach se spustí pouze jednou
- [ ] @BeforeEach se spustí po testu
- [ ] N/A

### Jak lze v JUnit ignorovat test?
- [x] Použitím @Disabled.
- [ ] Použitím @Ignore (pouze JUnit 4)
- [ ] Smazáním testovací metody
- [ ] N/A

### Jaký je rozdíl mezi unit testy a integračními testy?
- [x] Unit testy testují jednotlivé komponenty izolovaně, integrační testy ověřují spolupráci více částí systému.
- [ ] Unit testy a integrační testy jsou totéž
- [ ] Integrační testy testují pouze databázi
- [ ] N/A

### Jak testovat REST API v JUnit?
- [x] Pomocí Spring Boot Test + MockMvc.
- [ ] REST API nelze testovat v JUnit
- [ ] Pomocí System.out.println()
- [ ] N/A

### Jak se testuje vícevláknový kód v JUnit?
- [x] Použitím ExecutorService, CompletableFuture a awaitility.
- [ ] Vícevláknový kód nelze testovat
- [ ] Pomocí Thread.sleep() pouze
- [ ] N/A

### Jak ověřit, že metoda byla volána v Mockito?
- [x] Pomocí Mockito.verify(mock).method().
- [ ] Pomocí assertCalled()
- [ ] Mockito toto nepodporuje
- [ ] N/A

### Jak nastavit dynamické testy v JUnit 5?
- [x] Použitím @TestFactory a DynamicTest.stream().
- [ ] Dynamické testy JUnit 5 nepodporuje
- [ ] Pomocí @DynamicTest anotace
- [ ] N/A

### Jak funguje @Nested v JUnit 5?
- [x] Umožňuje organizovat testy do hierarchických skupin.
- [ ] @Nested vytváří paralelní testy
- [ ] @Nested ignoruje vnořené třídy
- [ ] N/A

### Jak testovat výjimky v Spocku?
- [x] Pomocí when: ... then: thrown(Exception).
- [ ] Pomocí @ExpectException
- [ ] Výjimky nelze v Spocku testovat
- [ ] N/A

### Jak spustit testy s více verzemi Javy?
- [x] Použitím Testcontainers nebo JUnit 5 parametrizovaných testů.
- [ ] Pouze manuální změnou JDK
- [ ] Více verzí Javy nelze testovat
- [ ] N/A

### Jak testovat databázové operace v Spring Boot?
- [x] Pomocí @DataJpaTest, Testcontainers a H2 databáze.
- [ ] Databázové operace nelze testovat
- [ ] Pouze na produkční databázi
- [ ] N/A

### Jak se dá v Spocku pracovat s mockováním?
- [x] Pomocí Mock(), Stub() a Spy().
- [ ] Spock nepodporuje mockování
- [ ] Pouze pomocí Mockito
- [ ] N/A

### Jak funguje @Transactional v testech?
- [x] Testy běží v transakci, která se po testu rollbackuje.
- [ ] @Transactional commituje změny po testu
- [ ] @Transactional není v testech podporováno
- [ ] N/A

### Jaký je rozdíl mezi @SpringBootTest a @WebMvcTest?
- [x] @SpringBootTest spouští celou aplikaci, @WebMvcTest testuje pouze webovou vrstvu.
- [ ] @SpringBootTest a @WebMvcTest jsou totéž
- [ ] @WebMvcTest spouští celou aplikaci
- [ ] N/A

### Jak testovat exception handling ve Spring Boot?
- [x] Pomocí @RestControllerAdvice a MockMvc.
- [ ] Exception handling nelze testovat
- [ ] Pouze pomocí try-catch
- [ ] N/A

### Jak se provádí mutační testování?
- [x] Pomocí Pitest (PIT Mutation Testing).
- [ ] Mutační testování neexistuje
- [ ] Pomocí JUnit @Mutation anotace
- [ ] N/A

### Jak v Spocku testovat podmínky?
- [x] Použitím where: bloku.
- [ ] Pomocí if-else v testu
- [ ] Spock nepodporuje podmínky v testech
- [ ] N/A

### Jak funguje @MockBean ve Spring Boot testech?
- [x] Nahrazuje komponentu Spring kontextu mockovanou verzí.
- [ ] @MockBean vytváří reálnou instanci
- [ ] @MockBean neexistuje
- [ ] N/A

### Jak testovat WebSockets v JUnit?
- [x] Použitím Spring TestWebSocketClient.
- [ ] WebSockets nelze testovat
- [ ] Pomocí HTTP klienta
- [ ] N/A

### Jak měřit výkon testů v JUnit?
- [x] Použitím System.nanoTime() nebo @Benchmark knihovny JMH.
- [ ] JUnit nepodporuje měření výkonu
- [ ] Pomocí Thread.sleep()
- [ ] N/A

### Jak v JUnit 5 spustit testy paralelně?
- [x] Pomocí @Execution(ExecutionMode.CONCURRENT).
- [ ] Paralelní testy JUnit 5 nepodporuje
- [ ] Pomocí @Parallel anotace
- [ ] N/A

### Jaké jsou best practices pro psaní testů?
- [x] Jasné názvy, izolovanost, minimalizace závislostí, použití test doubles.
- [ ] Dlouhé testy s mnoha asercemi
- [ ] Sdílení stavu mezi testy
- [ ] N/A

### Jak zajistit opakovatelnost testů?
- [x] Resetováním stavů mezi testy a správou náhodných dat.
- [ ] Spoléháním na pořadí testů
- [ ] Opakovatelnost není důležitá
- [ ] N/A

### Jaké jsou hlavní metody Assertions v JUnit?
- [x] assertEquals(), assertNotNull(), assertThrows(), assertIterableEquals().
- [ ] Pouze assertTrue() a assertFalse()
- [ ] JUnit nemá žádné assertions
- [ ] N/A

### Jak vytvořit test suite v JUnit?
- [x] Použitím @Suite a @SelectPackages.
- [ ] Test suite JUnit nepodporuje
- [ ] Pomocí XML konfigurace
- [ ] N/A

### Jak testovat asynchronní metody v JUnit?
- [x] Pomocí CompletableFuture, ExecutorService nebo knihovny Awaitility.
- [ ] Asynchronní metody nelze testovat
- [ ] Pomocí Thread.sleep() pouze
- [ ] N/A

### Jak funguje @TestInstance(Lifecycle.PER_CLASS) v JUnit 5?
- [x] Umožňuje sdílet stav mezi testy v rámci jedné testovací třídy.
- [ ] Vytváří novou instanci pro každý test
- [ ] @TestInstance neexistuje
- [ ] N/A

### Jak testovat časově závislé operace?
- [x] Pomocí System.nanoTime(), Clock API nebo simulací času s TestClock.
- [ ] Časově závislé operace nelze testovat
- [ ] Pomocí Thread.sleep() pouze
- [ ] N/A

### Jak testovat retry mechanizmy v JUnit?
- [x] Použitím knihoven jako Resilience4j a konfigurací retry policy.
- [ ] Retry mechanizmy nelze testovat
- [ ] Pomocí nekonečné smyčky
- [ ] N/A

### Jak funguje @TempDir v JUnit 5?
- [x] Poskytuje dočasný adresář pro testy pracující se soubory.
- [ ] @TempDir vytváří permanentní adresář
- [ ] @TempDir neexistuje
- [ ] N/A

### Jak testovat gRPC endpointy v JUnit?
- [x] Použitím knihovny gRPC-testing a InProcessServer.
- [ ] gRPC endpointy nelze testovat
- [ ] Pouze pomocí HTTP klienta
- [ ] N/A

### Jak funguje MockitoJUnitRunner a kdy jej použít?
- [x] Automaticky inicializuje mocky v testovací třídě.
- [ ] MockitoJUnitRunner spouští testy paralelně
- [ ] MockitoJUnitRunner neexistuje
- [ ] N/A

### Jak psát testy pro Spring Security?
- [x] Použitím @WithMockUser a MockMvc pro ověřování autentizace a autorizace.
- [ ] Spring Security nelze testovat
- [ ] Pouze manuálním testováním
- [ ] N/A

### Jak simulovat výjimky při testování databázových operací?
- [x] Pomocí Mockito.when().thenThrow(new SQLException()).
- [ ] Výjimky nelze simulovat
- [ ] Odpojením databáze
- [ ] N/A

### Jak se testují cache mechanismy ve Spring Boot?
- [x] Použitím @Cacheable spolu s @MockBean a verify() z Mockito.
- [ ] Cache mechanismy nelze testovat
- [ ] Pouze v produkčním prostředí
- [ ] N/A

### Jak testovat fronty zpráv (Kafka, RabbitMQ) v integračních testech?
- [x] Použitím Testcontainers a embedded brokerů.
- [ ] Fronty zpráv nelze testovat
- [ ] Pouze na produkčním prostředí
- [ ] N/A

### Jak funguje @EnabledIf a @DisabledIf v JUnit?
- [x] Umožňují podmíněné spouštění testů na základě systémových vlastností.
- [ ] @EnabledIf a @DisabledIf neexistují
- [ ] Vždy spouští všechny testy
- [ ] N/A

### Jak testovat JavaFX aplikace v JUnit?
- [x] Použitím knihovny TestFX a ApplicationTest.
- [ ] JavaFX aplikace nelze testovat
- [ ] Pouze manuálním testováním
- [ ] N/A

### Jak se pracuje s ArgumentCaptor v Mockito?
- [x] Slouží k zachycení argumentů předaných metodě během testu.
- [ ] ArgumentCaptor slouží k vytváření mocků
- [ ] ArgumentCaptor neexistuje
- [ ] N/A

### Jak testovat GraphQL API v JUnit?
- [x] Použitím GraphQLTestTemplate z knihovny spring-boot-starter-graphql a WebTestClient pro simulaci dotazů.
- [ ] GraphQL API nelze testovat
- [ ] Pouze pomocí REST klienta
- [ ] N/A

## Production Incidents

### Co je production incident?
- [x] Production incident je neočekávaná událost, která negativně ovlivňuje provoz produkčního systému.
- [ ] Plánovaná údržba systému
- [ ] Nová funkce v aplikaci
- [ ] N/A

### Jaké jsou nejčastější příčiny production incidentů?
- [x] Chyby v kódu, selhání infrastruktury, škálování, síťové problémy, závislosti na externích službách.
- [ ] Pouze hardware selhání
- [ ] Pouze lidské chyby
- [ ] N/A

### Jaké jsou klíčové kroky při řešení production incidentu?
- [x] Detekce, eskalace, diagnostika, oprava, validace a post-mortem analýza.
- [ ] Pouze restart serveru
- [ ] Ignorování problému
- [ ] N/A

### Jak funguje incident response process?
- [x] Proces zahrnuje detekci incidentu, oznámení odpovědným týmům, mitigaci dopadu a dlouhodobé řešení.
- [ ] Automatické řešení bez lidského zásahu
- [ ] Pouze zasílání e-mailů
- [ ] N/A

### Jaké nástroje se používají pro monitoring production incidentů?
- [x] Prometheus, Grafana, Datadog, ELK stack, New Relic, Splunk, Sentry.
- [ ] Pouze Excel tabulky
- [ ] Žádné nástroje nejsou potřeba
- [ ] N/A

### Jak zajistit rychlou detekci incidentů?
- [x] Nastavením alerting systémů, logování a automatizovaných testů.
- [ ] Čekáním na stížnosti zákazníků
- [ ] Manuální kontrolou každou hodinu
- [ ] N/A

### Co je incident severity level?
- [x] Určuje závažnost incidentu (např. P1 = kritický, P2 = vysoký, P3 = střední, P4 = nízký).
- [ ] Počet postižených uživatelů
- [ ] Doba trvání incidentu
- [ ] N/A

### Jak minimalizovat dopad production incidentu?
- [x] Použitím rollback mechanizmů, feature flags, graceful degradation.
- [ ] Vypnutím celého systému
- [ ] Ignorováním problému
- [ ] N/A

### Co je root cause analysis (RCA)?
- [x] Proces identifikace hlavní příčiny incidentu a návrhu preventivních opatření.
- [ ] Analýza výkonu serveru
- [ ] Kontrola kódu před nasazením
- [ ] N/A

### Jak funguje post-mortem analýza?
- [x] Zahrnuje dokumentaci incidentu, jeho dopad, příčinu, kroky k vyřešení a prevenci podobných problémů.
- [ ] Automatické generování reportů
- [ ] Mazání logů po incidentu
- [ ] N/A

### Jaké jsou best practices pro řešení production incidentů?
- [x] Rychlá komunikace, použití runbooků, zapojení správných týmů, dokumentace incidentů.
- [ ] Práce v izolaci bez komunikace
- [ ] Okamžité nasazení nového kódu
- [ ] N/A

### Co je runbook a proč je důležitý?
- [x] Runbook obsahuje předem definované kroky k řešení konkrétních typů incidentů.
- [ ] Runbook je seznam všech zaměstnanců
- [ ] Runbook je databázové schéma
- [ ] N/A

### Jaký je rozdíl mezi hotfix a rollback?
- [x] Hotfix je oprava nasazená do produkce bez velkých změn, rollback vrací systém na předchozí stabilní verzi.
- [ ] Hotfix a rollback jsou totéž
- [ ] Rollback je rychlejší než hotfix
- [ ] N/A

### Jak se testují opravy po incidentu?
- [x] Pomocí post-deployment testů, A/B testování, Canary releases.
- [ ] Pouze v produkci bez testování
- [ ] Testování není potřeba
- [ ] N/A

### Jak lze snížit riziko production incidentů?
- [x] Použitím CI/CD pipeline, automatizovaných testů, chaos engineeringu, pravidelných auditů.
- [ ] Nasazováním méně často
- [ ] Ignorováním varování
- [ ] N/A

### Jak funguje chaos engineering?
- [x] Simuluje výpadky a testuje odolnost systému proti neočekávaným situacím.
- [ ] Náhodné mazání dat v produkci
- [ ] Chaos engineering se nepoužívá
- [ ] N/A

### Co dělat, pokud incident ovlivňuje zákazníky?
- [x] Rychle informovat zákazníky, poskytnout dočasná řešení, minimalizovat dopady.
- [ ] Čekat až se problém vyřeší sám
- [ ] Ignorovat stížnosti zákazníků
- [ ] N/A

### Jak lze zlepšit komunikaci během incident response?
- [x] Použitím centralizovaného kanálu (Slack, Incident Management System), pravidelnými aktualizacemi.
- [ ] Komunikace pouze e-mailem
- [ ] Bez komunikace do vyřešení
- [ ] N/A

### Jaké metriky se sledují při production incidentech?
- [x] MTTR (Mean Time to Resolve), MTTD (Mean Time to Detect), MTBF (Mean Time Between Failures).
- [ ] Pouze počet incidentů
- [ ] Žádné metriky se nesledují
- [ ] N/A

### Jak vytvořit kulturu prevence incidentů?
- [x] Učením se z post-mortem analýz, neviněním jednotlivců, kontinuálním vylepšováním procesů.
- [ ] Trestáním zodpovědných osob
- [ ] Ignorováním minulých incidentů
- [ ] N/A

## Flyway/Liquibase

### Co je Flyway a Liquibase?
- [x] Oba jsou nástroje pro správu verzování databází, umožňující automatizaci migrací.
- [ ] Webové frameworky pro Java
- [ ] Nástroje pro testování API
- [ ] N/A

### Jaký je rozdíl mezi Flyway a Liquibase?
- [x] Flyway používá SQL soubory, zatímco Liquibase podporuje různé formáty (XML, YAML, JSON, SQL).
- [ ] Flyway a Liquibase jsou totéž
- [ ] Liquibase používá pouze SQL
- [ ] N/A

### Jak Flyway pracuje s verzemi migrací?
- [x] Každý soubor má unikátní verzi a aplikují se sekvenčně.
- [ ] Migrace se aplikují náhodně
- [ ] Flyway nepodporuje verzování
- [ ] N/A

### Jak Liquibase sleduje stav databáze?
- [x] Používá DATABASECHANGELOG tabulku.
- [ ] Pomocí textového souboru
- [ ] Liquibase nesleduje stav
- [ ] N/A

### Jak spustit migraci ve Flyway?
- [x] Pomocí flyway migrate.
- [ ] Pomocí flyway run
- [ ] Pomocí flyway execute
- [ ] N/A

### Jak Liquibase spravuje rollbacky?
- [x] Umožňuje explicitní definování rollback sekcí.
- [ ] Rollbacky Liquibase nepodporuje
- [ ] Automatický rollback bez konfigurace
- [ ] N/A

### Jak integrovat Flyway s Spring Boot?
- [x] Přidáním spring.flyway.enabled=true do konfigurace.
- [ ] Flyway nelze integrovat se Spring Boot
- [ ] Pomocí XML konfigurace
- [ ] N/A

### Jak integrovat Liquibase se Spring Boot?
- [x] Použitím spring.liquibase.change-log=classpath:db/changelog/db.changelog-master.yaml.
- [ ] Liquibase nelze integrovat se Spring Boot
- [ ] Pomocí anotací v kódu
- [ ] N/A

### Co je baselineOnMigrate ve Flyway?
- [x] Umožňuje inicializaci existující databáze bez aplikování starých migrací.
- [ ] Vytváří zálohu databáze
- [ ] Maže všechny existující migrace
- [ ] N/A

### Jak řešit konflikty v migracích?
- [x] Použitím transakcí a koordinací verzí mezi vývojáři.
- [ ] Konflikty nelze řešit
- [ ] Mazáním konfliktních migrací
- [ ] N/A

### Jaký je rozdíl mezi schema_version (Flyway) a DATABASECHANGELOG (Liquibase)?
- [x] schema_version uchovává seznam aplikovaných verzí, DATABASECHANGELOG sleduje detaily změn.
- [ ] Obě tabulky jsou totožné
- [ ] schema_version je zastaralé
- [ ] N/A

### Co je checksum ve Flyway a Liquibase?
- [x] Kontrolní součet zajišťuje, že migrace nebyly změněny.
- [ ] Checksum je název migrace
- [ ] Checksum určuje pořadí migrací
- [ ] N/A

### Jak spustit rollback ve Flyway?
- [x] Použitím flyway undo (ve verzi Pro).
- [ ] Pomocí flyway rollback
- [ ] Rollback ve Flyway není možný
- [ ] N/A

### Jak spustit rollback v Liquibase?
- [x] Použitím liquibase rollback <tag>.
- [ ] Pomocí liquibase undo
- [ ] Rollback v Liquibase není možný
- [ ] N/A

### Jaký je doporučený způsob pojmenování migračních souborů?
- [x] V1_1__create_users.sql pro Flyway, db.changelog-master.yaml pro Liquibase.
- [ ] Libovolné pojmenování
- [ ] Pouze číselné názvy
- [ ] N/A

### Jak lze zobrazit historii migrací?
- [x] flyway info nebo liquibase history.
- [ ] Pomocí SELECT * FROM migrations
- [ ] Historie migrací není dostupná
- [ ] N/A

### Jak řešit selhání migrace?
- [x] Opravit chybu a spustit repair ve Flyway nebo update v Liquibase.
- [ ] Smazat databázi a začít znovu
- [ ] Selhání nelze řešit
- [ ] N/A

### Jak pracovat s více databázemi ve Flyway?
- [x] Konfigurací více připojení v flyway.conf.
- [ ] Flyway nepodporuje více databází
- [ ] Pomocí jedné migrace pro všechny databáze
- [ ] N/A

### Jak pracovat s více databázemi v Liquibase?
- [x] Definováním více changelog souborů.
- [ ] Liquibase nepodporuje více databází
- [ ] Pomocí jednoho changelog souboru
- [ ] N/A

### Co je contexts v Liquibase?
- [x] Umožňuje spouštět změny jen v určitých prostředích.
- [ ] Contexts je název changelog souboru
- [ ] Contexts určuje pořadí migrací
- [ ] N/A

### Co je Placeholders ve Flyway?
- [x] Dynamické nahrazování hodnot v SQL skriptech.
- [ ] Placeholders jsou komentáře
- [ ] Placeholders určují verzi migrace
- [ ] N/A

### Jak spustit specifickou migraci v Liquibase?
- [x] Použitím liquibase update-to-tag <tag>.
- [ ] Pomocí liquibase run-single
- [ ] Specifickou migraci nelze spustit
- [ ] N/A

### Jak verzovat změny ve Flyway?
- [x] Každá změna musí mít unikátní V<verze>__název.sql soubor.
- [ ] Verzování není potřeba
- [ ] Pomocí XML konfigurace
- [ ] N/A

### Jak verzovat změny v Liquibase?
- [x] Použitím changeSet s unikátním id a author.
- [ ] Verzování není potřeba
- [ ] Pomocí číslování souborů
- [ ] N/A

### Jak lze ignorovat určité migrace?
- [x] Použitím ignoreMissingMigrations.
- [ ] Migrace nelze ignorovat
- [ ] Smazáním migračního souboru
- [ ] N/A

### Jak automaticky aplikovat migrace při startu aplikace?
- [x] Použitím spring.flyway.enabled=true nebo spring.liquibase.enabled=true.
- [ ] Automatické aplikování není možné
- [ ] Pomocí cron jobu
- [ ] N/A

### Jak Flyway a Liquibase fungují s CI/CD?
- [x] Automatické spouštění migrací v rámci build pipeline.
- [ ] CI/CD není podporováno
- [ ] Pouze manuální spuštění
- [ ] N/A

### Jak testovat databázové migrace?
- [x] Použitím testovacích databází (H2, Testcontainers).
- [ ] Testování migrací není možné
- [ ] Pouze na produkční databázi
- [ ] N/A

### Jak migrovat velká data?
- [x] Použitím batch insert a optimalizací transakcí.
- [ ] Velká data nelze migrovat
- [ ] Pouze manuálním kopírováním
- [ ] N/A

### Jak spravovat migrace pro více týmů?
- [x] Koordinací číslování verzí a code reviews.
- [ ] Každý tým má vlastní databázi
- [ ] Migrace nelze sdílet mezi týmy
- [ ] N/A

### Jak se chová Liquibase v replikovaných databázích?
- [x] Možnost synchronizace skriptů mezi servery.
- [ ] Liquibase nepodporuje replikaci
- [ ] Automatická replikace migrací
- [ ] N/A

### Jak Flyway pracuje s externími skripty?
- [x] Možnost spouštění .sql souborů mimo repozitář.
- [ ] Flyway nepodporuje externí skripty
- [ ] Pouze inline SQL v konfiguraci
- [ ] N/A

### Jak přizpůsobit logování ve Flyway?
- [x] Nastavením flyway.loggers.
- [ ] Logování nelze přizpůsobit
- [ ] Pomocí System.out.println()
- [ ] N/A

### Jak přizpůsobit logování v Liquibase?
- [x] Použitím liquibase.logging.level=DEBUG.
- [ ] Logování nelze přizpůsobit
- [ ] Pomocí XML konfigurace
- [ ] N/A

### Jaký je nejlepší přístup k rollbackům?
- [x] Použitím undo skriptů (Flyway Pro) nebo rollback sekcí (Liquibase).
- [ ] Rollbacky se nedoporučují
- [ ] Manuální úprava databáze
- [ ] N/A

### Jaký je doporučený workflow migrací v produkčním prostředí?
- [x] Verifikace ve staging prostředí před produkčním nasazením.
- [ ] Přímé nasazení do produkce
- [ ] Testování pouze na lokální databázi
- [ ] N/A

### Jak Flyway a Liquibase pracují s kontejnerizací?
- [x] Možnost spouštění v Docker kontejnerech.
- [ ] Kontejnerizace není podporována
- [ ] Pouze na bare metal serverech
- [ ] N/A

### Jak Flyway a Liquibase ovlivňují performance?
- [x] Správná granularita změn a optimalizace indexů.
- [ ] Nemají vliv na performance
- [ ] Vždy zpomalují databázi
- [ ] N/A

### Jak zajistit zpětnou kompatibilitu migrací?
- [x] Použitím feature flags a transakčních migrací.
- [ ] Zpětná kompatibilita není možná
- [ ] Mazáním starých migrací
- [ ] N/A

### Jak řešit konflikty v migracích mezi více vývojáři?
- [x] Pravidelnou synchronizací a code reviews.
- [ ] Konflikty nelze řešit
- [ ] Každý vývojář má vlastní databázi
- [ ] N/A

## ElasticSearch

### Co je ElasticSearch a k čemu slouží?
- [x] ElasticSearch je distribuovaný vyhledávací a analytický engine postavený na Apache Lucene.
- [ ] ElasticSearch je relační databáze
- [ ] ElasticSearch je webový server
- [ ] N/A

### Jaké jsou hlavní výhody ElasticSearch?
- [x] Rychlost vyhledávání, škálovatelnost, podpora full-textového vyhledávání a distribuovaná architektura.
- [ ] Nízké nároky na paměť
- [ ] Jednoduchá instalace bez konfigurace
- [ ] N/A

### Jaký je rozdíl mezi indexem a dokumentem v ElasticSearch?
- [x] Index je kolekce dokumentů, dokument je základní jednotka dat.
- [ ] Index a dokument jsou totéž
- [ ] Dokument obsahuje více indexů
- [ ] N/A

### Jaký je formát dokumentu v ElasticSearch?
- [x] Dokumenty jsou uloženy ve formátu JSON.
- [ ] Dokumenty jsou uloženy ve formátu XML
- [ ] Dokumenty jsou uloženy ve formátu CSV
- [ ] N/A

### Jak vytvořit index v ElasticSearch?
- [x] Použitím PUT /index_name.
- [ ] Použitím CREATE INDEX index_name
- [ ] Použitím NEW INDEX index_name
- [ ] N/A

### Jak vložit dokument do ElasticSearch?
- [x] Pomocí POST /index_name/_doc/{id} s JSON daty.
- [ ] Pomocí INSERT INTO index_name
- [ ] Pomocí ADD /index_name/doc
- [ ] N/A

### Jak vyhledávat dokumenty v ElasticSearch?
- [x] Použitím GET /index_name/_search s dotazem ve formátu Query DSL.
- [ ] Použitím SELECT * FROM index_name
- [ ] Použitím FIND /index_name
- [ ] N/A

### Co je Query DSL v ElasticSearch?
- [x] Doménově specifický jazyk pro strukturované dotazy.
- [ ] SQL dialekt pro ElasticSearch
- [ ] Programovací jazyk
- [ ] N/A

### Jaký je rozdíl mezi match a term dotazem?
- [x] match provádí full-text vyhledávání, term přesnou shodu.
- [ ] match a term jsou totéž
- [ ] term provádí full-text vyhledávání
- [ ] N/A

### Jak funguje analyzátor v ElasticSearch?
- [x] Rozděluje text na tokeny a normalizuje je pro efektivní vyhledávání.
- [ ] Analyzátor komprimuje data
- [ ] Analyzátor šifruje dokumenty
- [ ] N/A

### Co je mapping v ElasticSearch?
- [x] Určuje strukturu dokumentu včetně typů polí a analyzátorů.
- [ ] Mapping je geografická funkce
- [ ] Mapping kopíruje data mezi indexy
- [ ] N/A

### Jak lze aktualizovat dokument v ElasticSearch?
- [x] Pomocí POST /index_name/_update/{id}.
- [ ] Pomocí UPDATE /index_name/{id}
- [ ] Pomocí MODIFY /index_name/{id}
- [ ] N/A

### Jak smazat dokument v ElasticSearch?
- [x] Použitím DELETE /index_name/_doc/{id}.
- [ ] Použitím REMOVE /index_name/{id}
- [ ] Použitím DROP /index_name/{id}
- [ ] N/A

### Jak ElasticSearch podporuje škálování?
- [x] Pomocí shardů a replik.
- [ ] ElasticSearch nepodporuje škálování
- [ ] Pouze vertikální škálování
- [ ] N/A

### Co jsou shardy a repliky v ElasticSearch?
- [x] Shardy umožňují distribuci dat, repliky poskytují redundanci a zvýšenou dostupnost.
- [ ] Shardy a repliky jsou totéž
- [ ] Repliky jsou pro zálohování na disk
- [ ] N/A

### Jak monitorovat ElasticSearch cluster?
- [x] Pomocí Kibana, Prometheus, X-Pack a dalších nástrojů.
- [ ] ElasticSearch nelze monitorovat
- [ ] Pouze pomocí logů
- [ ] N/A

### Jak funguje agregace v ElasticSearch?
- [x] Umožňuje seskupování dat a výpočty, např. průměry, sumy.
- [ ] Agregace slouží pouze pro mazání dat
- [ ] Agregace kopíruje data
- [ ] N/A

### Jaký je rozdíl mezi filter a query?
- [x] query ovlivňuje skóre dokumentů, filter pouze filtruje výsledky bez změny skóre.
- [ ] filter a query jsou totéž
- [ ] filter ovlivňuje skóre dokumentů
- [ ] N/A

### Jak implementovat full-textové vyhledávání v ElasticSearch?
- [x] Pomocí analyzátorů a match dotazů.
- [ ] Full-textové vyhledávání není podporováno
- [ ] Pouze pomocí SQL dotazů
- [ ] N/A

### Jak funguje relevance scoring v ElasticSearch?
- [x] Výsledky jsou seřazeny podle skóre, které závisí na frekvenci výskytu a relevanci dotazu.
- [ ] Všechny dokumenty mají stejné skóre
- [ ] Skóre závisí pouze na velikosti dokumentu
- [ ] N/A

### Jak lze zvýšit výkon vyhledávání v ElasticSearch?
- [x] Použitím cache, optimalizací shardů, správným mappingem.
- [ ] Přidáním více dokumentů
- [ ] Zvýšením počtu replik na 100
- [ ] N/A

### Jak ElasticSearch zvládá vysokou dostupnost?
- [x] Automatickým failoverem mezi uzly v clusteru.
- [ ] ElasticSearch nepodporuje vysokou dostupnost
- [ ] Pouze manuálním zásahem
- [ ] N/A

### Jak zálohovat data v ElasticSearch?
- [x] Pomocí snapshotů do vzdáleného úložiště.
- [ ] Kopírováním souborů na disk
- [ ] Zálohování není možné
- [ ] N/A

### Jaké jsou hlavní rozdíly mezi ElasticSearch a tradiční SQL databází?
- [x] ElasticSearch je schema-less, optimalizovaný pro vyhledávání, ne pro transakční operace.
- [ ] ElasticSearch a SQL databáze jsou totéž
- [ ] SQL databáze je lepší pro vyhledávání
- [ ] N/A

### Jak provést bulk operaci v ElasticSearch?
- [x] Použitím _bulk API pro hromadné vkládání, mazání a aktualizaci dokumentů.
- [ ] Bulk operace nejsou podporovány
- [ ] Pomocí FOR smyčky v SQL
- [ ] N/A

### Jak integrovat ElasticSearch s Logstash a Kibana?
- [x] Použitím ELK stacku pro sběr, zpracování a vizualizaci dat.
- [ ] Integrace není možná
- [ ] Pouze pomocí REST API
- [ ] N/A

### Jak ElasticSearch zpracovává JSON dokumenty?
- [x] Automaticky mapuje datové typy a strukturu.
- [ ] JSON dokumenty musí být ručně převedeny
- [ ] ElasticSearch nepodporuje JSON
- [ ] N/A

### Co je index alias v ElasticSearch?
- [x] Umožňuje přesměrování dotazů na různé indexy bez změny kódu aplikace.
- [ ] Alias je kopie indexu
- [ ] Alias maže starý index
- [ ] N/A

### Jak optimalizovat storage v ElasticSearch?
- [x] Použitím správných nastavení shardů, komprese a lifecycle managementu.
- [ ] Storage nelze optimalizovat
- [ ] Mazáním všech replik
- [ ] N/A

### Jak ElasticSearch zvládá více jazyků?
- [x] Použitím jazykových analyzátorů pro tokenizaci a stemming.
- [ ] ElasticSearch podporuje pouze angličtinu
- [ ] Více jazyků není podporováno
- [ ] N/A

### Jak provést rollback změn v ElasticSearch?
- [x] Použitím snapshot/restore nebo aliasů.
- [ ] Rollback není možný
- [ ] Pomocí UNDO příkazu
- [ ] N/A

### Jak ElasticSearch indexuje data?
- [x] Každý dokument je analyzován a uložen ve formátu inverted index.
- [ ] Data jsou uložena jako prostý text
- [ ] Indexování probíhá pouze při vyhledávání
- [ ] N/A

### Jaký je rozdíl mezi soft delete a hard delete?
- [x] Soft delete skrývá dokument, hard delete jej trvale odstraní.
- [ ] Soft delete a hard delete jsou totéž
- [ ] Hard delete pouze skrývá dokument
- [ ] N/A

### Jak zabezpečit ElasticSearch cluster?
- [x] Použitím TLS, autentizace, autorizace a firewall pravidel.
- [ ] ElasticSearch nelze zabezpečit
- [ ] Pouze pomocí hesla
- [ ] N/A

### Jak integrovat ElasticSearch s databázemi?
- [x] Použitím ETL procesů, Logstash nebo JDBC konektorů.
- [ ] Integrace není možná
- [ ] Pouze manuálním kopírováním
- [ ] N/A

### Jak funguje cross-cluster search v ElasticSearch?
- [x] Umožňuje dotazování přes více clusterů.
- [ ] Cross-cluster search není podporován
- [ ] Vyžaduje kopírování dat mezi clustery
- [ ] N/A

### Jak ElasticSearch zvládá update-heavy workload?
- [x] Pomocí verzování dokumentů a optimalizace indexace.
- [ ] Update operace nejsou podporovány
- [ ] Pouze mazáním a vkládáním nových dokumentů
- [ ] N/A

### Jak implementovat geo-vyhledávání v ElasticSearch?
- [x] Použitím geo_point typu a geo_distance dotazů.
- [ ] Geo-vyhledávání není podporováno
- [ ] Pouze pomocí externích knihoven
- [ ] N/A

### Jak ElasticSearch zvládá near real-time vyhledávání?
- [x] Použitím refresh intervalů a segment merge.
- [ ] Real-time vyhledávání není podporováno
- [ ] Pouze s delay 1 hodina
- [ ] N/A

### Jak řešit problémy s vysokou latencí v ElasticSearch?
- [x] Optimalizací dotazů, tuningem shardů a cachováním výsledků.
- [ ] Latenci nelze snížit
- [ ] Přidáním více dokumentů
- [ ] N/A

### Jaké jsou hlavní výzvy při škálování ElasticSearch clusteru?
- [x] Správná konfigurace shardů, optimalizace dotazů, rovnoměrné rozložení dat mezi nody.
- [ ] ElasticSearch nelze škálovat
- [ ] Škálování je automatické bez výzev
- [ ] N/A

### Jak funguje snapshot a restore v ElasticSearch?
- [x] Snapshoty umožňují zálohování indexů do vzdáleného úložiště a jejich následné obnovení.
- [ ] Snapshot pouze komprimuje data
- [ ] Restore vytváří nový cluster
- [ ] N/A

### Jak lze efektivně spravovat staré indexy v ElasticSearch?
- [x] Použitím Index Lifecycle Management (ILM) pro automatickou rotaci, archivaci a mazání.
- [ ] Staré indexy nelze spravovat
- [ ] Pouze manuálním mazáním
- [ ] N/A

### Co je frozen index a k čemu slouží?
- [x] Frozen index umožňuje uchovávat historická data s minimálními nároky na paměť.
- [ ] Frozen index je poškozený index
- [ ] Frozen index nelze číst
- [ ] N/A

### Jak ElasticSearch pracuje s časovými řadami dat?
- [x] Použitím časově řazených indexů a optimalizovaných dotazů pro agregaci.
- [ ] Časové řady nejsou podporovány
- [ ] Pouze pomocí externích nástrojů
- [ ] N/A

### Jak implementovat real-time alerting pomocí ElasticSearch?
- [x] Použitím X-Pack Alerting nebo kombinací Kibana Watcher a Logstash.
- [ ] Alerting není podporován
- [ ] Pouze pomocí e-mailových notifikací
- [ ] N/A

### Jak řešit duplicitní dokumenty v ElasticSearch?
- [x] Pomocí deduplikace při indexaci nebo použitím update API místo index API.
- [ ] Duplicity nelze řešit
- [ ] Mazáním celého indexu
- [ ] N/A

### Jak analyzovat výkon ElasticSearch dotazů?
- [x] Použitím profile API pro detailní analýzu a optimalizaci dotazů.
- [ ] Výkon dotazů nelze analyzovat
- [ ] Pouze pomocí stopek
- [ ] N/A

### Jak implementovat access control v ElasticSearch?
- [x] Použitím Role-Based Access Control (RBAC) dostupného v X-Pack Security.
- [ ] Access control není podporován
- [ ] Pouze pomocí firewallu
- [ ] N/A

### Jaké jsou best practices pro správu velkého ElasticSearch clusteru?
- [x] Optimalizace shardů, pravidelné monitorování, efektivní caching, správná konfigurace heap size.
- [ ] Žádné best practices neexistují
- [ ] Pouze přidávání více nodů
- [ ] N/A

## SQL

### Co je SQL a k čemu slouží?
- [x] SQL (Structured Query Language) je jazyk pro správu a manipulaci s relačními databázemi.
- [ ] SQL je programovací jazyk pro webové aplikace
- [ ] SQL je operační systém
- [ ] N/A

### Jaké jsou hlavní typy SQL příkazů?
- [x] DML (Data Manipulation Language) – SELECT, INSERT, UPDATE, DELETE; DDL (Data Definition Language) – CREATE, ALTER, DROP; DCL (Data Control Language) – GRANT, REVOKE; TCL (Transaction Control Language) – COMMIT, ROLLBACK, SAVEPOINT.
- [ ] Pouze SELECT a INSERT
- [ ] Pouze CREATE a DROP
- [ ] N/A

### Jaký je rozdíl mezi INNER JOIN, LEFT JOIN, RIGHT JOIN a FULL JOIN?
- [x] INNER JOIN vrací pouze odpovídající záznamy z obou tabulek; LEFT JOIN vrací všechny záznamy z levé tabulky a odpovídající záznamy z pravé; RIGHT JOIN vrací všechny záznamy z pravé tabulky a odpovídající záznamy z levé; FULL JOIN vrací všechny záznamy, pokud existuje shoda na jedné nebo druhé straně.
- [ ] Všechny JOIN typy jsou totéž
- [ ] JOIN operace nejsou v SQL podporovány
- [ ] N/A

### Jak funguje GROUP BY a HAVING?
- [x] GROUP BY seskupuje výsledky podle jednoho nebo více sloupců a HAVING filtruje seskupené výsledky na základě agregačních funkcí.
- [ ] GROUP BY a HAVING jsou totéž
- [ ] HAVING seskupuje data
- [ ] N/A

### Jaké jsou základní agregační funkce v SQL?
- [x] COUNT(), SUM(), AVG(), MIN(), MAX().
- [ ] Pouze COUNT() a SUM()
- [ ] SQL nepodporuje agregační funkce
- [ ] N/A

### Co je ORDER BY a jak funguje?
- [x] Řadí výsledky podle jednoho nebo více sloupců, buď vzestupně (ASC), nebo sestupně (DESC).
- [ ] ORDER BY filtruje data
- [ ] ORDER BY seskupuje data
- [ ] N/A

### Jak funguje DISTINCT v SQL?
- [x] DISTINCT odstraňuje duplikáty a vrací pouze jedinečné hodnoty.
- [ ] DISTINCT řadí data
- [ ] DISTINCT seskupuje data
- [ ] N/A

### Jaký je rozdíl mezi WHERE a HAVING?
- [x] WHERE filtruje řádky před agregací, HAVING filtruje výsledky po použití GROUP BY.
- [ ] WHERE a HAVING jsou totéž
- [ ] HAVING filtruje před agregací
- [ ] N/A

### Co je UNION a jaký je rozdíl mezi UNION a UNION ALL?
- [x] UNION kombinuje výsledky dvou dotazů a odstraňuje duplikáty, zatímco UNION ALL kombinuje výsledky bez odstranění duplikátů.
- [ ] UNION a UNION ALL jsou totéž
- [ ] UNION ALL odstraňuje duplikáty
- [ ] N/A

### Jak lze spojit více podmínek v WHERE?
- [x] Použitím AND, OR, NOT.
- [ ] Použitím pouze AND
- [ ] Podmínky nelze spojovat
- [ ] N/A

### Jak funguje CASE v SQL?
- [x] CASE umožňuje podmíněné logické větvení v SQL dotazech.
- [ ] CASE slouží pro řazení dat
- [ ] CASE není v SQL podporován
- [ ] N/A

### Jak vytvořit index v SQL a k čemu slouží?
- [x] CREATE INDEX index_name ON table_name(column_name); – Indexy zrychlují vyhledávání.
- [ ] Indexy se vytvářejí automaticky
- [ ] Indexy zpomalují vyhledávání
- [ ] N/A

### Co je PRIMARY KEY a FOREIGN KEY?
- [x] PRIMARY KEY jednoznačně identifikuje záznam v tabulce a FOREIGN KEY je odkaz na primární klíč jiné tabulky.
- [ ] PRIMARY KEY a FOREIGN KEY jsou totéž
- [ ] FOREIGN KEY identifikuje záznam
- [ ] N/A

### Jak funguje CHECK constraint?
- [x] Omezuje hodnoty v určitém sloupci podle podmínky.
- [ ] CHECK kontroluje syntaxi SQL
- [ ] CHECK vytváří index
- [ ] N/A

### Jak odstranit duplicitní záznamy v SQL?
- [x] Pomocí DELETE s ROW_NUMBER() nebo DISTINCT.
- [ ] Duplicity nelze odstranit
- [ ] Pomocí CREATE TABLE
- [ ] N/A

### Jaký je rozdíl mezi TRUNCATE a DELETE?
- [x] TRUNCATE odstraní všechny záznamy bez možnosti rollbacku, zatímco DELETE odstraní specifické řádky a lze ho vrátit zpět.
- [ ] TRUNCATE a DELETE jsou totéž
- [ ] DELETE je rychlejší než TRUNCATE
- [ ] N/A

### Jak funguje transakce v SQL?
- [x] Použitím BEGIN TRANSACTION, COMMIT, ROLLBACK.
- [ ] Transakce nejsou v SQL podporovány
- [ ] Pomocí SELECT pouze
- [ ] N/A

### Co je SAVEPOINT?
- [x] SAVEPOINT umožňuje částečné vrácení transakce zpět.
- [ ] SAVEPOINT ukládá celou databázi
- [ ] SAVEPOINT commituje transakci
- [ ] N/A

### Jak funguje EXISTS v SQL?
- [x] EXISTS kontroluje, zda dotaz vrací nějaké řádky.
- [ ] EXISTS vytváří novou tabulku
- [ ] EXISTS řadí výsledky
- [ ] N/A

### Jaký je rozdíl mezi EXISTS a IN?
- [x] EXISTS je efektivnější pro velké množství dat, IN je vhodný pro menší množství hodnot.
- [ ] EXISTS a IN jsou totéž
- [ ] IN je vždy rychlejší
- [ ] N/A

### Jak vytvořit dočasnou tabulku?
- [x] CREATE TEMPORARY TABLE temp_table_name (...).
- [ ] Pomocí CREATE TABLE #temp
- [ ] Dočasné tabulky nejsou podporovány
- [ ] N/A

### Jak funguje MERGE v SQL?
- [x] Kombinuje INSERT, UPDATE a DELETE v jednom příkazu.
- [ ] MERGE pouze spojuje tabulky
- [ ] MERGE není v SQL podporován
- [ ] N/A

### Jaké jsou rozdíly mezi VARCHAR a TEXT?
- [x] VARCHAR má definovanou maximální délku, TEXT je určen pro velké textové objemy.
- [ ] VARCHAR a TEXT jsou totéž
- [ ] TEXT má maximální délku 255 znaků
- [ ] N/A

### Jak funguje COALESCE?
- [x] Vrací první neprázdnou hodnotu v seznamu.
- [ ] COALESCE spojuje řetězce
- [ ] COALESCE sčítá hodnoty
- [ ] N/A

### Jak použít LIMIT a OFFSET v SQL?
- [x] LIMIT omezuje počet vrácených řádků, OFFSET přeskočí určité množství řádků.
- [ ] LIMIT a OFFSET jsou totéž
- [ ] OFFSET omezuje počet řádků
- [ ] N/A

### Co je pohled (VIEW) v SQL?
- [x] Virtuální tabulka, která uchovává uložený SQL dotaz.
- [ ] VIEW je kopie tabulky
- [ ] VIEW ukládá data fyzicky
- [ ] N/A

### Jak aktualizovat více záznamů najednou?
- [x] Použitím UPDATE table_name SET column_name = value WHERE condition.
- [ ] Pouze jeden záznam lze aktualizovat
- [ ] Pomocí INSERT příkazu
- [ ] N/A

### Jak smazat tabulku v SQL?
- [x] Použitím DROP TABLE table_name;.
- [ ] Pomocí DELETE TABLE table_name
- [ ] Pomocí REMOVE TABLE table_name
- [ ] N/A

### Jak zobrazit strukturu tabulky?
- [x] DESCRIBE table_name; nebo SHOW COLUMNS FROM table_name;.
- [ ] Pomocí SELECT STRUCTURE
- [ ] Pomocí VIEW TABLE table_name
- [ ] N/A

### Jak získat aktuální datum a čas v SQL?
- [x] Použitím NOW(), CURRENT_TIMESTAMP.
- [ ] Pomocí GET_DATE()
- [ ] Pomocí DATE_NOW()
- [ ] N/A

### Jak převést datové typy v SQL?
- [x] Použitím CAST(value AS type) nebo CONVERT(value, type).
- [ ] Datové typy nelze převádět
- [ ] Pomocí TYPE_CONVERT()
- [ ] N/A

### Jak funguje RANK() v SQL?
- [x] Přiděluje pořadí hodnotám v rámci skupiny.
- [ ] RANK() počítá řádky
- [ ] RANK() řadí tabulky
- [ ] N/A

### Co je CROSS JOIN?
- [x] Vrací kartézský součin dvou tabulek.
- [ ] CROSS JOIN je totéž jako INNER JOIN
- [ ] CROSS JOIN odstraňuje duplikáty
- [ ] N/A

### Jak se liší DELETE a DROP?
- [x] DELETE odstraňuje řádky, DROP odstraňuje celou tabulku.
- [ ] DELETE a DROP jsou totéž
- [ ] DROP odstraňuje řádky
- [ ] N/A

### Jak funguje LAG() a LEAD() v SQL?
- [x] Umožňují přístup k předchozím nebo následujícím hodnotám v rámci výsledku.
- [ ] LAG() a LEAD() jsou totéž
- [ ] LAG() vrací následující hodnotu
- [ ] N/A

### Co je CTE (Common Table Expression)?
- [x] Dočasná pojmenovaná sada výsledků použitá v SQL dotazu.
- [ ] CTE je typ indexu
- [ ] CTE vytváří permanentní tabulku
- [ ] N/A

### Jak funguje WINDOW funkce v SQL?
- [x] Umožňuje použití agregačních funkcí bez seskupování řádků.
- [ ] WINDOW funkce vytváří nové okno
- [ ] WINDOW funkce nejsou v SQL podporovány
- [ ] N/A

### Jak lze optimalizovat SQL dotazy?
- [x] Použitím indexů, optimalizací JOIN operací, normalizací dat.
- [ ] SQL dotazy nelze optimalizovat
- [ ] Přidáním více sloupců
- [ ] N/A

### Jak lze sledovat výkon SQL dotazů?
- [x] Použitím EXPLAIN nebo ANALYZE.
- [ ] Výkon dotazů nelze sledovat
- [ ] Pomocí SELECT PERFORMANCE
- [ ] N/A

### Jak funguje normalizace v SQL?
- [x] Proces odstranění redundance a závislostí v databázových tabulkách.
- [ ] Normalizace přidává redundanci
- [ ] Normalizace spojuje tabulky
- [ ] N/A

## Hibernate

### Jak lze Hibernate integrovat se Spring Boot?
- [x] Použitím spring-boot-starter-data-jpa.
- [ ] Pomocí XML konfigurace pouze
- [ ] Hibernate nelze integrovat se Spring Boot
- [ ] N/A

### Jaký je rozdíl mezi merge() a update() v Hibernate?
- [x] merge() synchronizuje detached entitu, update() vyžaduje připojenou entitu.
- [ ] merge() a update() jsou totéž
- [ ] update() synchronizuje detached entitu
- [ ] N/A

### Jak definovat primární klíč v Hibernate?
- [x] Pomocí @Id a @GeneratedValue.
- [ ] Pomocí @PrimaryKey
- [ ] Pomocí @Key
- [ ] N/A

### Jak pracovat s auto-increment v Hibernate?
- [x] Použitím @GeneratedValue(strategy = GenerationType.IDENTITY).
- [ ] Pomocí @AutoIncrement
- [ ] Auto-increment není v Hibernate podporován
- [ ] N/A

### Jaký je rozdíl mezi save(), persist() a saveOrUpdate()?
- [x] save() vrací ID objektu, persist() ne, saveOrUpdate() pracuje s novými i existujícími objekty.
- [ ] Všechny metody jsou totéž
- [ ] persist() vrací ID objektu
- [ ] N/A

### Jak odstranit entitu v Hibernate?
- [x] session.delete(entity);
- [ ] session.remove(entity);
- [ ] session.drop(entity);
- [ ] N/A

### Jak se mapují vztahy v Hibernate pomocí anotací?
- [x] @OneToOne, @OneToMany, @ManyToOne, @ManyToMany.
- [ ] Pomocí @Relation pouze
- [ ] Vztahy nelze mapovat anotacemi
- [ ] N/A

### Co je CascadeType v Hibernate?
- [x] Řídí propagaci operací jako PERSIST, MERGE, REMOVE, REFRESH.
- [ ] CascadeType určuje typ databáze
- [ ] CascadeType je typ indexu
- [ ] N/A

### Co je @JoinColumn v Hibernate?
- [x] Specifikace cizího klíče ve vztazích mezi entitami.
- [ ] @JoinColumn vytváří novou tabulku
- [ ] @JoinColumn spojuje dva SELECT dotazy
- [ ] N/A

### Jak v Hibernate definovat unikátní omezení?
- [x] Pomocí @Column(unique = true) nebo @UniqueConstraint.
- [ ] Pomocí @Unique pouze
- [ ] Unikátní omezení nelze definovat
- [ ] N/A

### Jak Hibernate pracuje s databázovými transakcemi?
- [x] Používá Transaction objekt pro řízení transakcí.
- [ ] Transakce jsou automatické bez konfigurace
- [ ] Hibernate nepodporuje transakce
- [ ] N/A

### Jak implementovat optimistic locking v Hibernate?
- [x] Pomocí @Version.
- [ ] Pomocí @Lock
- [ ] Pomocí @Optimistic
- [ ] N/A

### Jak funguje native query v Hibernate?
- [x] @Query(value = "SELECT * FROM users", nativeQuery = true).
- [ ] Native query není v Hibernate podporováno
- [ ] Pomocí @NativeSQL
- [ ] N/A

### Jaký je rozdíl mezi flush() a commit()?
- [x] flush() zapíše změny do databáze, commit() dokončí transakci.
- [ ] flush() a commit() jsou totéž
- [ ] commit() zapíše změny do databáze
- [ ] N/A

### Jak implementovat pagination v Hibernate?
- [x] Pomocí setFirstResult() a setMaxResults().
- [ ] Pomocí @Pageable pouze
- [ ] Pagination není v Hibernate podporována
- [ ] N/A

### Jaká je role Interceptor v Hibernate?
- [x] Poskytuje možnost ovlivňovat entity před a po jejich persistenci.
- [ ] Interceptor slouží pro logování pouze
- [ ] Interceptor není v Hibernate podporován
- [ ] N/A

### Jak pracovat s více databázemi v Hibernate?
- [x] Konfigurací více SessionFactory instancí.
- [ ] Hibernate podporuje pouze jednu databázi
- [ ] Pomocí jedné SessionFactory pro všechny databáze
- [ ] N/A

### Jak optimalizovat výkon Hibernate aplikace?
- [x] Použitím cachování, optimalizovaných dotazů, správné konfigurace vztahů.
- [ ] Výkon nelze optimalizovat
- [ ] Přidáním více entit
- [ ] N/A

### Jak Hibernate podporuje auditování změn v entitách?
- [x] Pomocí @PreUpdate, @PrePersist anotací nebo knihoven jako Envers.
- [ ] Auditování není v Hibernate podporováno
- [ ] Pomocí @Audit pouze
- [ ] N/A

### Jak pracovat s uloženými procedurami v Hibernate?
- [x] Použitím @NamedStoredProcedureQuery.
- [ ] Uložené procedury nejsou podporovány
- [ ] Pomocí @StoredProcedure
- [ ] N/A

### Jak zobrazit SQL dotazy generované Hibernate?
- [x] Nastavením hibernate.show_sql=true.
- [ ] SQL dotazy nelze zobrazit
- [ ] Pomocí @ShowSQL
- [ ] N/A

### Jak změnit strategii generování identifikátorů v Hibernate?
- [x] Použitím @GeneratedValue(strategy = GenerationType.TABLE).
- [ ] Strategie nelze měnit
- [ ] Pomocí @IdStrategy
- [ ] N/A

### Jak provést hromadné operace v Hibernate?
- [x] Použitím Query.executeUpdate().
- [ ] Hromadné operace nejsou podporovány
- [ ] Pomocí session.bulkUpdate()
- [ ] N/A

### Jak Hibernate zvládá databázovou nezávislost?
- [x] Použitím Dialect tříd.
- [ ] Hibernate podporuje pouze MySQL
- [ ] Pomocí @Database anotace
- [ ] N/A

### Jaký je rozdíl mezi nativeQuery a JPQL?
- [x] nativeQuery používá SQL, JPQL je databázově nezávislé.
- [ ] nativeQuery a JPQL jsou totéž
- [ ] JPQL používá nativní SQL
- [ ] N/A

### Jak funguje connection pooling v Hibernate?
- [x] Pomocí Apache DBCP, HikariCP nebo C3P0.
- [ ] Connection pooling není v Hibernate podporován
- [ ] Pomocí @ConnectionPool
- [ ] N/A

### Jaké jsou hlavní chyby při práci s Hibernate?
- [x] LazyInitializationException, neoptimalizované dotazy, nesprávné mapování vztahů.
- [ ] Hibernate nemá žádné běžné chyby
- [ ] Pouze NullPointerException
- [ ] N/A

### Jak vypnout auto-commit v Hibernate?
- [x] Nastavením hibernate.connection.autocommit=false.
- [ ] Auto-commit nelze vypnout
- [ ] Pomocí @DisableAutoCommit
- [ ] N/A

### Jak Hibernate podporuje multi-tenancy?
- [x] Pomocí MultiTenantConnectionProvider.
- [ ] Multi-tenancy není v Hibernate podporována
- [ ] Pomocí @Tenant anotace
- [ ] N/A

### Jak nakonfigurovat Hibernate s PostgreSQL/MySQL?
- [x] Nastavením hibernate.dialect na odpovídající Dialect třídu.
- [ ] Konfigurace není potřeba
- [ ] Pomocí @Database anotace
- [ ] N/A

### Jak funguje dirty checking v Hibernate?
- [x] Automaticky detekuje změny entit a synchronizuje je s databází.
- [ ] Dirty checking musí být manuálně aktivován
- [ ] Dirty checking není v Hibernate podporován
- [ ] N/A

### Jaký je doporučený přístup k unit testování Hibernate entit?
- [x] Použitím H2 databáze a @DataJpaTest ve Spring Boot.
- [ ] Testování Hibernate entit není možné
- [ ] Pouze na produkční databázi
- [ ] N/A

## Clean Code

### Co je Clean Code?
- [x] Clean Code je soubor zásad a praktik pro psaní čitelného, udržovatelného a efektivního kódu.
- [ ] Clean Code je nástroj pro automatické formátování kódu
- [ ] Clean Code je programovací jazyk
- [ ] N/A

### Jaké jsou hlavní principy Clean Code?
- [x] Srozumitelnost, jednoduchost, modularita, minimalizace závislostí, dobře pojmenované entity.
- [ ] Maximální délka kódu a složitost
- [ ] Použití co nejvíce globálních proměnných
- [ ] N/A

### Jaká jsou pravidla pro pojmenování proměnných?
- [x] Výstižná, srozumitelná a konzistentní jména, vyhýbat se zkráceným nebo nejasným názvům.
- [ ] Co nejkratší jednopísmenné názvy
- [ ] Používat pouze čísla v názvech
- [ ] N/A

### Co je Single Responsibility Principle (SRP)?
- [x] Každá třída nebo funkce by měla mít pouze jednu odpovědnost.
- [ ] Každá třída by měla dělat co nejvíce věcí najednou
- [ ] Princip pro pojmenování proměnných
- [ ] N/A

### Jaký je rozdíl mezi DRY a WET kódem?
- [x] DRY (Don't Repeat Yourself) eliminuje duplicitu, WET (Write Everything Twice) vede k opakovanému kódu.
- [ ] DRY a WET jsou stejné koncepty
- [ ] WET je lepší přístup než DRY
- [ ] N/A

### Jaký je význam principu KISS?
- [x] Keep It Simple, Stupid – návrh by měl být co nejjednodušší.
- [ ] Keep It Super Sophisticated – maximální složitost
- [ ] Princip pro testování kódu
- [ ] N/A

### Jak funguje princip YAGNI?
- [x] You Ain't Gonna Need It – neimplementovat funkce, které aktuálně nejsou potřeba.
- [ ] You Always Gonna Need It – implementovat vše předem
- [ ] Princip pro správu databází
- [ ] N/A

### Co znamená SOLID v programování?
- [x] Soubor pěti principů pro návrh objektově orientovaného kódu (SRP, OCP, LSP, ISP, DIP).
- [ ] Název programovacího jazyka
- [ ] Typ databázového systému
- [ ] N/A

### Jaký je význam Open/Closed Principle (OCP)?
- [x] Kód by měl být otevřen pro rozšíření, ale uzavřen pro modifikaci.
- [ ] Kód by měl být uzavřen pro rozšíření
- [ ] Princip pro správu souborů
- [ ] N/A

### Co je Liskov Substitution Principle (LSP)?
- [x] Objekty odvozených tříd by měly být zaměnitelné za objekty základních tříd.
- [ ] Princip pojmenování proměnných
- [ ] Metoda pro optimalizaci databází
- [ ] N/A

### Co znamená Dependency Inversion Principle (DIP)?
- [x] Vysokoúrovňové moduly by neměly záviset na nízkoúrovňových modulech, ale na abstrakcích.
- [ ] Nízkoúrovňové moduly by měly řídit vysokoúrovňové
- [ ] Princip pro práci s databázemi
- [ ] N/A

### Jak se v Clean Code přistupuje k funkcím?
- [x] Měly by být krátké, dělat pouze jednu věc a mít dobře definované vstupy a výstupy.
- [ ] Měly by být co nejdelší a dělat více věcí najednou
- [ ] Funkce by neměly mít parametry
- [ ] N/A

### Jaký je význam principu „Tell, Don't Ask"?
- [x] Objekty by měly být instruovány, co mají dělat, místo dotazování na svůj stav.
- [ ] Vždy se ptát na stav objektu před akcí
- [ ] Princip pro logování
- [ ] N/A

### Jak pracovat s komentáři v kódu?
- [x] Měly by být využívány minimálně a pouze tam, kde je to nezbytné pro vysvětlení složité logiky.
- [ ] Každý řádek by měl mít komentář
- [ ] Komentáře by měly nahrazovat dokumentaci
- [ ] N/A

### Jak efektivně strukturovat kód?
- [x] Používat konzistentní formátování, oddělovat logiku do samostatných modulů, dodržovat konvence jazyka.
- [ ] Veškerý kód v jednom souboru
- [ ] Náhodné formátování pro větší flexibilitu
- [ ] N/A

### Jak psát čitelný kód?
- [x] Použitím srozumitelných názvů proměnných, konzistentního stylu a krátkých metod.
- [ ] Použitím co nejkratších názvů proměnných
- [ ] Maximalizací počtu řádků v metodě
- [ ] N/A

### Co znamená princip Low Coupling, High Cohesion?
- [x] Moduly by měly být co nejvíce nezávislé (low coupling) a zaměřené na jednu odpovědnost (high cohesion).
- [ ] Moduly by měly být co nejvíce propojené
- [ ] Princip pro návrh databází
- [ ] N/A

### Jak pracovat s chybami v Clean Code?
- [x] Používat výjimky místo návratových hodnot, předcházet chybám validací vstupních dat.
- [ ] Ignorovat všechny chyby
- [ ] Používat pouze návratové kódy
- [ ] N/A

### Jaká je role testů v Clean Code?
- [x] Pomáhají udržet kód srozumitelný, správný a refaktorovatelný bez obav z narušení funkcionality.
- [ ] Testy nejsou v Clean Code důležité
- [ ] Testy zpomalují vývoj
- [ ] N/A

### Jak přistupovat k refaktoringu v Clean Code?
- [x] Průběžně zlepšovat strukturu kódu bez změny jeho chování.
- [ ] Nikdy neměnit existující kód
- [ ] Refaktoring pouze před vydáním
- [ ] N/A

### Jak eliminovat „magic numbers" v kódu?
- [x] Použitím pojmenovaných konstant místo přímých číselných hodnot.
- [ ] Magic numbers jsou v pořádku
- [ ] Použitím více magic numbers
- [ ] N/A

### Proč je důležité minimalizovat vedlejší efekty v metodách?
- [x] Metody by měly dělat jen to, co říká jejich název, a neměly by nečekaně měnit stav objektů.
- [ ] Vedlejší efekty jsou žádoucí
- [ ] Metody by měly měnit co nejvíce objektů
- [ ] N/A

### Jak organizovat soubory a složky v projektu?
- [x] Podle logických celků, používat oddělené balíčky/moduly pro různé vrstvy aplikace.
- [ ] Všechny soubory v jedné složce
- [ ] Náhodné rozmístění souborů
- [ ] N/A

### Jaké jsou výhody psaní čistého kódu?
- [x] Lepší čitelnost, snazší údržba, nižší náklady na rozvoj a rozšíření.
- [ ] Čistý kód nemá žádné výhody
- [ ] Pouze estetický přínos
- [ ] N/A

### Jaký je správný způsob použití logování v Clean Code?
- [x] Používat správné úrovně logů (INFO, DEBUG, ERROR) a minimalizovat nadbytečné logování.
- [ ] Logovat vše na úrovni ERROR
- [ ] Nepoužívat logování vůbec
- [ ] N/A

### Jak eliminovat závislosti mezi třídami?
- [x] Použitím Dependency Injection a návrhových vzorů jako Factory nebo Observer.
- [ ] Přidáním více přímých závislostí
- [ ] Závislosti nelze eliminovat
- [ ] N/A

### Jaký je správný přístup k modularitě v Clean Code?
- [x] Rozdělit aplikaci na malé, znovupoužitelné moduly s jasně definovanými rozhraními.
- [ ] Jeden velký modul pro celou aplikaci
- [ ] Modularita není důležitá
- [ ] N/A

### Co je Anti-Pattern a jak se mu vyhnout?
- [x] Špatné řešení běžného problému, které by mělo být nahrazeno lepší praxí.
- [ ] Anti-Pattern je doporučený vzor
- [ ] Anti-Pattern je typ testu
- [ ] N/A

### Jak eliminovat nevyužitý kód?
- [x] Pravidelnou kontrolou kódu, odstraněním nepoužívaných metod a tříd.
- [ ] Nevyužitý kód by měl zůstat pro budoucí použití
- [ ] Nevyužitý kód nelze odstranit
- [ ] N/A

### Jaký je přístup k psaní funkcí s minimálním počtem parametrů?
- [x] Použitím objektů jako parametrů místo dlouhých seznamů argumentů.
- [ ] Funkce by měly mít co nejvíce parametrů
- [ ] Parametry nejsou důležité
- [ ] N/A

### Proč je důležité dodržovat konzistentní formátování kódu?
- [x] Konzistentní formátování usnadňuje čtení kódu a snižuje riziko chyb.
- [ ] Formátování není důležité
- [ ] Každý vývojář by měl mít vlastní styl
- [ ] N/A

### Jak zajistit, aby byly metody v kódu snadno pochopitelné?
- [x] Dodržováním jasných pojmenování a psaním metod s jednou odpovědností.
- [ ] Přidáním více logiky do jedné metody
- [ ] Používáním zkratek v názvech
- [ ] N/A

### Co je princip „Fail Fast" a jak se uplatňuje v kódu?
- [x] Rychlé selhání aplikace při nesprávném vstupu nebo stavu místo pokračování s nevalidními daty.
- [ ] Pokračovat s nevalidními daty co nejdéle
- [ ] Fail Fast je testovací framework
- [ ] N/A

### Jak řešit práci se závislostmi mezi moduly?
- [x] Použitím Dependency Injection a rozhraní pro oddělení implementace.
- [ ] Přímým propojením všech modulů
- [ ] Závislosti se neřeší
- [ ] N/A

### Jak zajistit zpětnou kompatibilitu při refaktorování?
- [x] Použitím testů k ověření, že změny neporuší stávající funkcionalitu.
- [ ] Zpětná kompatibilita není důležitá
- [ ] Refaktoring vždy rozbije zpětnou kompatibilitu
- [ ] N/A

### Jak se vyhnout příliš dlouhým třídám?
- [x] Rozdělením odpovědností do více tříd podle principu SRP.
- [ ] Dlouhé třídy jsou v pořádku
- [ ] Sloučením všeho do jedné třídy
- [ ] N/A

### Co znamená „expressive code"?
- [x] Kód, který je sám o sobě čitelný a nevyžaduje nadbytečnou dokumentaci.
- [ ] Kód plný komentářů
- [ ] Kód s mnoha zkratkami
- [ ] N/A

### Jaký je přístup k validaci vstupních dat v Clean Code?
- [x] Použitím metod pro validaci dat na začátku zpracování.
- [ ] Validace není potřeba
- [ ] Validovat pouze na konci zpracování
- [ ] N/A

### Jaké nástroje lze použít pro zajištění Clean Code?
- [x] SonarQube, ESLint, Prettier, Checkstyle.
- [ ] Clean Code nástroje neexistují
- [ ] Pouze ruční kontrola
- [ ] N/A

### Jak psát srozumitelné testy?
- [x] Použitím pojmenovaných testovacích metod a jednoduchých scénářů.
- [ ] Testy by měly být co nejsložitější
- [ ] Názvy testů nejsou důležité
- [ ] N/A

## Authentication / Authorization / JWT

### Jaký je rozdíl mezi autentizací a autorizací?
- [x] Autentizace ověřuje identitu uživatele, autorizace určuje jeho oprávnění.
- [ ] Autentizace a autorizace jsou totéž
- [ ] Autorizace ověřuje identitu uživatele
- [ ] N/A

### Jaké jsou hlavní metody autentizace uživatelů?
- [x] Hesla, OAuth, OpenID Connect, SAML, biometrické metody.
- [ ] Pouze hesla
- [ ] Pouze biometrické metody
- [ ] N/A

### Co je OAuth 2.0?
- [x] Standardní protokol pro delegovanou autorizaci mezi aplikacemi.
- [ ] Šifrovací algoritmus
- [ ] Databázový systém
- [ ] N/A

### Jak funguje OpenID Connect?
- [x] Rozšíření OAuth 2.0 poskytující autentizaci uživatele.
- [ ] Samostatný protokol nezávislý na OAuth
- [ ] Šifrovací protokol
- [ ] N/A

### Co je JSON Web Token (JWT)?
- [x] Standardizovaný token obsahující údaje o uživateli, podepsaný pro ověření integrity.
- [ ] Formát pro ukládání databází
- [ ] Programovací jazyk
- [ ] N/A

### Jaké jsou hlavní části JWT?
- [x] Header, Payload, Signature.
- [ ] Username, Password, Token
- [ ] Key, Value, Hash
- [ ] N/A

### Jaký je rozdíl mezi přístupovým a obnovovacím tokenem?
- [x] Přístupový token slouží k ověřování požadavků, obnovovací token generuje nové přístupové tokeny.
- [ ] Jsou totéž
- [ ] Obnovovací token slouží k ověřování požadavků
- [ ] N/A

### Jaké jsou výhody JWT oproti relaci na serveru?
- [x] Bezstavovost, škálovatelnost, decentralizace ověření.
- [ ] JWT nemá žádné výhody
- [ ] JWT vyžaduje více serverových zdrojů
- [ ] N/A

### Jaký algoritmus se používá pro podepisování JWT?
- [x] HMAC (HS256) nebo asymetrické RSA/ECDSA.
- [ ] MD5
- [ ] Base64
- [ ] N/A

### Jak ochránit JWT před zneužitím?
- [x] Použitím HTTPS, krátkou expirací, uložení v HttpOnly cookie, kontrolou signatury.
- [ ] JWT nelze ochránit
- [ ] Uložením v localStorage bez šifrování
- [ ] N/A

### Co je OAuth klient, resource owner a authorization server?
- [x] Klient je aplikace žádající o přístup, resource owner je uživatel, authorization server vydává tokeny.
- [ ] Všechny role jsou totéž
- [ ] Resource owner vydává tokeny
- [ ] N/A

### Jak funguje Authorization Code Flow v OAuth 2.0?
- [x] Uživatel se přihlásí, získá autorizační kód a ten je vyměněn za přístupový token.
- [ ] Token je vydán okamžitě bez kódu
- [ ] Pouze pro mobilní aplikace
- [ ] N/A

### Co je Implicit Flow v OAuth 2.0?
- [x] Přímé předání přístupového tokenu bez autorizačního kódu (již se nedoporučuje).
- [ ] Nejbezpečnější OAuth flow
- [ ] Flow pro server-to-server komunikaci
- [ ] N/A

### Jak funguje Client Credentials Flow v OAuth 2.0?
- [x] Přihlášení aplikace k API pomocí client_id a client_secret.
- [ ] Flow pro běžné uživatele
- [ ] Flow bez jakýchkoliv credentials
- [ ] N/A

### Jaký je rozdíl mezi stateful a stateless autentizací?
- [x] Stateful ukládá session na serveru, stateless využívá například JWT.
- [ ] Jsou totéž
- [ ] Stateless ukládá session na serveru
- [ ] N/A

### Jak funguje SAML v autentizaci?
- [x] Protokol pro výměnu autentizačních a autorizačních údajů v XML formátu.
- [ ] JSON-based protokol
- [ ] Šifrovací algoritmus
- [ ] N/A

### Jaký je rozdíl mezi Single Sign-On (SSO) a federovanou autentizací?
- [x] SSO umožňuje jednorázové přihlášení mezi službami, federace propojuje více identitních poskytovatelů.
- [ ] SSO a federace jsou totéž
- [ ] Federace neumožňuje více poskytovatelů
- [ ] N/A

### Jaký je účel refresh tokenu v OAuth 2.0?
- [x] Umožňuje získat nový přístupový token bez nutnosti znovu přihlásit uživatele.
- [ ] Refresh token slouží k autentizaci
- [ ] Refresh token nahrazuje access token
- [ ] N/A

### Jak zabránit útokům typu token replay?
- [x] Použitím nonce hodnoty, časových razítek, omezením platnosti tokenu.
- [ ] Token replay nelze zabránit
- [ ] Použitím delších tokenů
- [ ] N/A

### Co je PKCE v OAuth 2.0?
- [x] Mechanismus zabraňující útokům na Authorization Code Flow pomocí code challenge.
- [ ] Typ šifrování
- [ ] OAuth grant type
- [ ] N/A

### Jak bezpečně ukládat JWT v prohlížeči?
- [x] Použitím HttpOnly cookies místo localStorage nebo sessionStorage.
- [ ] V localStorage bez zabezpečení
- [ ] V URL parametrech
- [ ] N/A

### Jak vynutit odhlášení uživatele při použití JWT?
- [x] Sledováním token blacklistu, použitím krátkých expirací, revokací refresh tokenu.
- [ ] JWT nelze invalidovat
- [ ] Automatické odhlášení není možné
- [ ] N/A

### Jak funguje Multi-Factor Authentication (MFA)?
- [x] Přidáním dalšího faktoru k autentizaci, například SMS, OTP, biometrie.
- [ ] MFA používá pouze heslo
- [ ] MFA je typ OAuth flow
- [ ] N/A

### Jaký je rozdíl mezi role-based a attribute-based access control?
- [x] RBAC používá role, ABAC pracuje s atributy uživatele a prostředí.
- [ ] RBAC a ABAC jsou totéž
- [ ] ABAC používá role
- [ ] N/A

### Jak implementovat fine-grained authorization?
- [x] Použitím ABAC nebo politik na základě pravidel (např. OAuth scopes, Open Policy Agent).
- [ ] Fine-grained authorization nelze implementovat
- [ ] Pouze pomocí jednoduchých rolí
- [ ] N/A

### Jak chránit API před neoprávněným přístupem?
- [x] Použitím API klíčů, OAuth tokenů, rate limiting.
- [ ] API nelze chránit
- [ ] Pouze pomocí hesel
- [ ] N/A

### Jak zneplatnit JWT token?
- [x] Přidáním na blacklist, změnou podpisového klíče, zkrácením expirace.
- [ ] JWT nelze zneplatnit
- [ ] Smazáním tokenu z databáze
- [ ] N/A

### Jak zajišťuje JWT důvěryhodnost informací?
- [x] Pomocí digitálního podpisu (HMAC, RSA, ECDSA).
- [ ] JWT nezajišťuje důvěryhodnost
- [ ] Pomocí šifrování Base64
- [ ] N/A

### Jaký je rozdíl mezi signed a encrypted JWT?
- [x] Signed JWT chrání integritu dat, encrypted JWT šifruje celý payload.
- [ ] Signed a encrypted JWT jsou totéž
- [ ] Encrypted JWT chrání pouze integritu
- [ ] N/A

### Jaký je problém se sdílením JWT mezi subdoménami?
- [x] Potřeba správného nastavení CORS a cookie domén.
- [ ] JWT nelze sdílet mezi subdoménami
- [ ] Žádný problém neexistuje
- [ ] N/A

### Jak řešit session timeout v aplikacích s JWT?
- [x] Krátkou expirací tokenu a použitím refresh tokenu.
- [ ] Session timeout nelze řešit s JWT
- [ ] Použitím nekonečné expirace
- [ ] N/A

### Jak zabránit útoku typu session fixation?
- [x] Regenerací session ID při přihlášení uživatele.
- [ ] Session fixation nelze zabránit
- [ ] Použitím stejného session ID
- [ ] N/A

### Co jsou OAuth scopes a jak se používají?
- [x] Scopes definují oprávnění pro přístup k API.
- [ ] Scopes jsou typy tokenů
- [ ] Scopes definují uživatelské role
- [ ] N/A

### Jak implementovat logout v aplikaci s JWT?
- [x] Smazáním tokenu, přidáním na blacklist, invalidací refresh tokenu.
- [ ] Logout nelze implementovat s JWT
- [ ] Pouze smazáním tokenu z localStorage
- [ ] N/A

### Jaká je role Identity Provideru (IdP)?
- [x] IdP poskytuje autentizační služby a vydává tokeny.
- [ ] IdP ukládá data uživatelů
- [ ] IdP je typ databáze
- [ ] N/A

### Jak se řeší Single Logout (SLO) v SAML a OpenID Connect?
- [x] Notifikací všech připojených služeb o odhlášení uživatele.
- [ ] SLO nelze implementovat
- [ ] Pouze lokálním odhlášením
- [ ] N/A

### Jak chránit REST API pomocí OAuth 2.0?
- [x] Použitím přístupových tokenů s kontrolou scopes a oprávnění.
- [ ] OAuth 2.0 nelze použít pro REST API
- [ ] Pouze pomocí API klíčů
- [ ] N/A

### Jak funguje federovaná autentizace?
- [x] Umožňuje přihlášení uživatele pomocí externí identity (např. Google, Facebook, Azure AD).
- [ ] Federovaná autentizace používá pouze lokální účty
- [ ] Federovaná autentizace je typ šifrování
- [ ] N/A

### Jaké jsou nejlepší praktiky pro zabezpečení JWT?
- [x] Použití krátkých expirací, HTTPS, podpisu, omezení rozsahu informací v tokenu.
- [ ] JWT nepotřebuje zabezpečení
- [ ] Použití dlouhých expirací a HTTP
- [ ] N/A

### Jak funguje token introspection v OAuth 2.0?
- [x] Endpoint umožňující validaci a kontrolu aktivních tokenů.
- [ ] Token introspection vytváří nové tokeny
- [ ] Token introspection šifruje tokeny
- [ ] N/A

### Jaký je rozdíl mezi OAuth 1.0 a OAuth 2.0?
- [x] OAuth 2.0 je jednodušší, nepoužívá podpisy requestů, podporuje více grant typů.
- [ ] OAuth 1.0 a 2.0 jsou totéž
- [ ] OAuth 1.0 je novější
- [ ] N/A

### Jak OAuth řeší bezpečné sdílení přístupových práv mezi aplikacemi?
- [x] Pomocí delegované autorizace a přístupových tokenů.
- [ ] OAuth nesdílí přístupová práva
- [ ] Pomocí sdílení hesel
- [ ] N/A

### Jaký je rozdíl mezi API Gateway a OAuth Authorization Serverem?
- [x] API Gateway směruje provoz, Authorization Server vydává tokeny.
- [ ] API Gateway a Authorization Server jsou totéž
- [ ] API Gateway vydává tokeny
- [ ] N/A

### Jaká je role aud claimu v JWT?
- [x] Definuje, pro kterou službu je token určen.
- [ ] aud claim obsahuje uživatelské jméno
- [ ] aud claim definuje expiraci
- [ ] N/A

### Jak funguje OAuth 2.1 a čím se liší od OAuth 2.0?
- [x] Odstraňuje zastaralé granty, přidává bezpečnostní vylepšení.
- [ ] OAuth 2.1 a 2.0 jsou totéž
- [ ] OAuth 2.1 přidává nové grant typy
- [ ] N/A

### Jak zabránit Cross-Site Request Forgery (CSRF) v autentizaci?
- [x] Použitím CSRF tokenů, SameSite cookies.
- [ ] CSRF nelze zabránit
- [ ] Pouze pomocí HTTPS
- [ ] N/A

### Jak zamezit útoku typu brute-force na přihlašovací endpoint?
- [x] Použitím rate limiting, CAPTCHA, uzamknutím účtu po X pokusech.
- [ ] Brute-force útokům nelze zabránit
- [ ] Pouze pomocí silných hesel
- [ ] N/A

### Jaký je rozdíl mezi OAuth a API klíči?
- [x] OAuth je bezpečnější, API klíče jsou jednodušší.
- [ ] OAuth a API klíče jsou totéž
- [ ] API klíče jsou bezpečnější než OAuth
- [ ] N/A

### Jak funguje Zero Trust Authentication?
- [x] Neustále ověřuje identitu a kontext, nedůvěřuje žádné síti.
- [ ] Zero Trust důvěřuje interní síti
- [ ] Zero Trust nevyžaduje autentizaci
- [ ] N/A

### Jaký je rozdíl mezi Access Tokenem a ID Tokenem v OpenID Connect?
- [x] Access Token slouží k autorizaci, ID Token obsahuje informace o uživateli.
- [ ] Access Token a ID Token jsou totéž
- [ ] ID Token slouží k autorizaci
- [ ] N/A

## HTTP(s)

### Co je HTTP a HTTPS?
- [x] HTTP (HyperText Transfer Protocol) je protokol pro přenos dat na webu. HTTPS (Secure) je šifrovaná verze pomocí TLS/SSL.
- [ ] HTTP je databázový protokol, HTTPS je jeho komprimovaná verze
- [ ] HTTP je souborový systém, HTTPS je jeho šifrovaná varianta
- [ ] N/A

### Jaký je rozdíl mezi HTTP 1.1, HTTP/2 a HTTP/3?
- [x] HTTP/1.1 používá spojení na požadavek, HTTP/2 umožňuje multiplexing, HTTP/3 využívá QUIC místo TCP.
- [ ] HTTP/1.1 je textový, HTTP/2 binární, HTTP/3 používá XML
- [ ] Všechny verze jsou identické, liší se pouze číslem
- [ ] N/A

### Jak funguje SSL/TLS v HTTPS?
- [x] Používá asymetrické šifrování pro zabezpečení přenosu dat mezi klientem a serverem.
- [ ] Komprimuje data pro rychlejší přenos
- [ ] Pouze ověřuje identitu serveru bez šifrování
- [ ] N/A

### Jaké jsou hlavní HTTP metody?
- [x] GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, TRACE, CONNECT.
- [ ] SEND, RECEIVE, UPDATE, REMOVE
- [ ] READ, WRITE, EXECUTE, DELETE
- [ ] N/A

### Jak funguje stavový kód HTTP?
- [x] Stavové kódy informují o výsledku požadavku: 2xx (úspěch), 3xx (přesměrování), 4xx (chyby klienta), 5xx (chyby serveru).
- [ ] Stavové kódy určují prioritu požadavku
- [ ] Stavové kódy definují typ šifrování
- [ ] N/A

### Co znamená HTTP status kód 200, 301, 400, 403, 404 a 500?
- [x] 200 OK, 301 Přesměrování, 400 Špatný požadavek, 403 Zakázáno, 404 Nenalezeno, 500 Chyba serveru.
- [ ] 200 Chyba, 301 OK, 400 Přesměrování, 403 Nenalezeno, 404 Zakázáno, 500 Úspěch
- [ ] Všechny kódy znamenají úspěšné dokončení požadavku
- [ ] N/A

### Jak funguje HTTP caching?
- [x] Používá hlavičky Cache-Control, ETag, Expires ke snížení zátěže serveru.
- [ ] Ukládá všechny požadavky na disk bez možnosti konfigurace
- [ ] Cache funguje pouze na straně serveru
- [ ] N/A

### Co je CORS a jaké problémy řeší?
- [x] Cross-Origin Resource Sharing umožňuje řízení přístupu k API napříč doménami.
- [ ] CORS je kompresní algoritmus pro HTTP
- [ ] CORS je typ HTTP metody pro mazání dat
- [ ] N/A

### Jaké jsou hlavní HTTP hlavičky?
- [x] Content-Type, Authorization, Accept, User-Agent, Referer, Host, Cookie.
- [ ] Name, Value, Type, Size
- [ ] Start, End, Length, Format
- [ ] N/A

### Jak funguje Content Negotiation v HTTP?
- [x] Server může na základě Accept hlavičky vrátit požadovaný formát dat.
- [ ] Klient a server se dohadují o ceně přenosu
- [ ] Automaticky vybírá nejrychlejší server
- [ ] N/A

### Co je HTTP persistentní spojení?
- [x] Drží spojení otevřené pro více požadavků místo opakovaného navazování spojení.
- [ ] Spojení které nikdy nevyprší
- [ ] Spojení uložené v databázi
- [ ] N/A

### Jak HTTP/2 řeší problém s latencí?
- [x] Použitím multiplexingu, komprese hlaviček a server push.
- [ ] Zvýšením velikosti paketů
- [ ] Použitím více TCP spojení současně
- [ ] N/A

### Co je HSTS a k čemu slouží?
- [x] HTTP Strict Transport Security (HSTS) vynucuje používání HTTPS.
- [ ] HSTS je typ HTTP metody
- [ ] HSTS je kompresní algoritmus
- [ ] N/A

### Jak lze zabezpečit přenos citlivých dat přes HTTP?
- [x] Použitím HTTPS, správným nastavením TLS, ochranou proti MITM útokům.
- [ ] Stačí použít silné heslo
- [ ] HTTP je vždy bezpečné, není třeba dalších opatření
- [ ] N/A

### Jak funguje základní autentizace v HTTP?
- [x] Hlavička Authorization: Basic <encoded-credentials> obsahuje zakódované přihlašovací údaje.
- [ ] Heslo se posílá v URL adrese
- [ ] Autentizace probíhá pouze na straně klienta
- [ ] N/A

### Co je HTTP Keep-Alive?
- [x] Mechanismus umožňující udržet spojení mezi klientem a serverem pro více požadavků.
- [ ] Pravidelné kontroly dostupnosti serveru
- [ ] Automatické obnovení vypršeného spojení
- [ ] N/A

### Jaké jsou hlavní hrozby při používání HTTP?
- [x] MITM útoky, odposlechy dat, spoofing, injekční útoky.
- [ ] HTTP nemá žádné bezpečnostní hrozby
- [ ] Pouze pomalé načítání stránek
- [ ] N/A

### Jaké jsou výhody QUIC oproti TCP v HTTP/3?
- [x] Rychlejší navázání spojení, menší latence, lepší výkon na nestabilních sítích.
- [ ] QUIC je pomalejší ale bezpečnější
- [ ] QUIC a TCP jsou identické protokoly
- [ ] N/A

### Co znamená idempotence v HTTP metodách?
- [x] Opakované volání metody by mělo mít stejný výsledek (např. GET, PUT, DELETE jsou idempotentní, ale POST není).
- [ ] Metoda může být volána pouze jednou
- [ ] Metoda automaticky opakuje požadavek při chybě
- [ ] N/A

### Jak minimalizovat velikost HTTP odpovědi?
- [x] Použitím GZIP/Brotli komprese, minimalizací hlaviček a optimalizací obsahu.
- [ ] Odesláním pouze prvních 100 bajtů
- [ ] Použitím většího bufferu
- [ ] N/A

## API

### Co je API?
- [x] API (Application Programming Interface) je rozhraní, které umožňuje komunikaci mezi různými softwarovými aplikacemi.
- [ ] API je programovací jazyk
- [ ] API je typ databáze
- [ ] N/A

### Jaké jsou hlavní typy API?
- [x] REST API, SOAP API, GraphQL API, gRPC API.
- [ ] GET API, POST API, DELETE API
- [ ] Frontend API, Backend API, Database API
- [ ] N/A

### Jaký je rozdíl mezi REST a SOAP?
- [x] REST je lehký architektonický styl využívající JSON/XML, SOAP je protokol využívající XML s přísnými pravidly.
- [ ] REST je novější verze SOAP
- [ ] SOAP je rychlejší než REST
- [ ] N/A

### Co znamená RESTful API?
- [x] API dodržující zásady REST (Representational State Transfer) – stateless komunikace, využívání HTTP metod.
- [ ] API které odpovídá pomalu
- [ ] API pro mobilní aplikace
- [ ] N/A

### Jaké jsou hlavní HTTP metody používané v REST API?
- [x] GET, POST, PUT, DELETE, PATCH.
- [ ] SEND, RECEIVE, UPDATE
- [ ] READ, WRITE, REMOVE
- [ ] N/A

### Co znamená idempotence v kontextu API?
- [x] Opakované volání metody má stejný výsledek (např. GET, PUT, DELETE jsou idempotentní, POST není).
- [ ] API lze volat pouze jednou
- [ ] API automaticky cachuje výsledky
- [ ] N/A

### Co jsou API endpointy?
- [x] Konkrétní URL adresy API, ke kterým klient posílá požadavky.
- [ ] Chybové stavy API
- [ ] Typy odpovědí API
- [ ] N/A

### Jak zabezpečit API?
- [x] Použitím autentizace/autorizace (OAuth, JWT), rate limiting, HTTPS, validací vstupů.
- [ ] Stačí silné heslo
- [ ] API není třeba zabezpečovat
- [ ] N/A

### Jak funguje API Rate Limiting?
- [x] Omezuje počet požadavků klienta na API za určitý časový interval.
- [ ] Zvyšuje rychlost odpovědi API
- [ ] Omezuje velikost odpovědi
- [ ] N/A

### Co jsou API Gateways?
- [x] Prostředníci mezi klienty a backend službami, kteří zajišťují bezpečnost, autentizaci, load balancing.
- [ ] Vstupní body do databáze
- [ ] Typy API endpointů
- [ ] N/A

### Jaký je rozdíl mezi PUT a PATCH v REST API?
- [x] PUT nahrazuje celý dataset, PATCH upravuje pouze specifické atributy.
- [ ] PUT je rychlejší než PATCH
- [ ] PATCH vytváří nové záznamy, PUT aktualizuje
- [ ] N/A

### Jaké jsou hlavní výhody GraphQL oproti REST API?
- [x] Možnost získání pouze požadovaných dat, lepší optimalizace pro klienty, žádné pevně dané endpointy.
- [ ] GraphQL je rychlejší
- [ ] GraphQL nepotřebuje server
- [ ] N/A

### Jak API podporuje verzování?
- [x] Použitím verzování v URL (/v1/resource), v hlavičkách nebo v parametrech dotazu.
- [ ] API nelze verzovat
- [ ] Verzování se řeší na straně klienta
- [ ] N/A

### Jak funguje autentizace v API pomocí JWT?
- [x] Klient posílá JWT token v Authorization hlavičce, server ověřuje platnost podpisu.
- [ ] JWT se posílá v URL
- [ ] JWT je typ API endpointu
- [ ] N/A

### Co je CORS a proč je důležité v API?
- [x] Cross-Origin Resource Sharing řídí přístup k API z jiných domén a zvyšuje bezpečnost.
- [ ] CORS je typ API
- [ ] CORS zrychluje API
- [ ] N/A

### Jak testovat API?
- [x] Použitím nástrojů jako Postman, Curl, nebo testovacích frameworků jako Jest, JUnit.
- [ ] API se netestuje
- [ ] Pouze manuálním voláním v prohlížeči
- [ ] N/A

### Jak funguje API monitoring?
- [x] API je průběžně sledováno pomocí nástrojů jako Prometheus, New Relic nebo Datadog.
- [ ] Monitoring se provádí ručně
- [ ] API monitoring není potřeba
- [ ] N/A

### Co je API mocking?
- [x] Simulace API odpovědí pomocí nástrojů jako WireMock, Mockoon pro testování bez skutečného backendu.
- [ ] Kopírování API
- [ ] Mazání API dat
- [ ] N/A

### Jak funguje API documentation?
- [x] Dokumentace je generována pomocí nástrojů jako Swagger, OpenAPI, Redoc.
- [ ] Dokumentace se píše ručně do Word dokumentu
- [ ] API dokumentace není potřeba
- [ ] N/A

### Jak optimalizovat výkon API?
- [x] Použitím cachování, load balancingu, optimalizací databázových dotazů, minimalizací payloadu.
- [ ] Zvýšením počtu serverů
- [ ] Výkon API nelze optimalizovat
- [ ] N/A

### Jaký je rozdíl mezi synchronním a asynchronním API?
- [x] Synchronní API očekává okamžitou odpověď, asynchronní API může odpovědět později (např. pomocí WebSockets).
- [ ] Synchronní API je rychlejší
- [ ] Asynchronní API nepotřebuje server
- [ ] N/A

### Jaký je rozdíl mezi monolitickým a mikroservisním API?
- [x] Monolitické API je součástí velkého systému, mikroservisní API je rozděleno na malé nezávislé služby.
- [ ] Monolitické API je modernější
- [ ] Mikroservisní API běží na jednom serveru
- [ ] N/A

### Co je gRPC API?
- [x] API framework od Google založený na Protocol Buffers, určený pro rychlou komunikaci mezi službami.
- [ ] Typ REST API
- [ ] Grafické rozhraní pro API
- [ ] N/A

### Jak funguje pagination v API?
- [x] Použitím parametrů limit a offset nebo cursor-based stránkováním.
- [ ] Automatickým rozdělením dat
- [ ] Pagination se v API nepoužívá
- [ ] N/A

### Jak se zajišťuje API backward compatibility?
- [x] Použitím verzování API, deprekováním starých endpointů, rozšířením místo změn existujících struktur.
- [ ] Backward compatibility není důležitá
- [ ] Smazáním starých verzí
- [ ] N/A

### Co znamená API throttling?
- [x] Omezování rychlosti API požadavků pro zabránění přetížení serveru.
- [ ] Zrychlování API
- [ ] Komprese API odpovědí
- [ ] N/A

### Jak funguje API orchestration?
- [x] Centralizovaný management a řízení volání mezi více API službami.
- [ ] Automatické generování API
- [ ] Testování API
- [ ] N/A

### Jak API implementuje logging a auditing?
- [x] Logování požadavků a odpovědí pomocí ELK Stack, Splunk nebo CloudWatch.
- [ ] Logging se v API nepoužívá
- [ ] Pouze ruční zápis do souborů
- [ ] N/A

### Jak API podporuje multi-tenancy?
- [x] Každý tenant má izolovaná data a konfiguraci, často označené v hlavičkách nebo subdoménách.
- [ ] Multi-tenancy API nepodporuje
- [ ] Všichni tenanti sdílejí stejná data
- [ ] N/A

### Jak API zvládá velké množství požadavků (high availability)?
- [x] Load balancing, caching, sharding databází, horizontal scaling.
- [ ] Zvýšením RAM serveru
- [ ] High availability není možná
- [ ] N/A

### Jak API zvládá autorizaci na základě uživatelských rolí?
- [x] Role-Based Access Control (RBAC) nebo Attribute-Based Access Control (ABAC).
- [ ] Všichni uživatelé mají stejná práva
- [ ] Autorizace se řeší na klientu
- [ ] N/A

### Jaký je rozdíl mezi API Proxy a API Gateway?
- [x] API Proxy pouze přesměrovává požadavky, API Gateway provádí autentizaci, transformace a monitoring.
- [ ] Jsou to stejné věci
- [ ] API Proxy je novější verze API Gateway
- [ ] N/A

### Jak lze zamezit API abuse a bot útokům?
- [x] Použitím rate limiting, CAPTCHA, IP whitelisting, token-based autentizace.
- [ ] API abuse nelze zamezit
- [ ] Pouze změnou URL
- [ ] N/A

### Jak implementovat failover mechanismus v API?
- [x] Přesměrování provozu na záložní servery při selhání primárního.
- [ ] Failover není potřeba
- [ ] Restartováním serveru
- [ ] N/A

### Co jsou webhooks a jak fungují v API?
- [x] Asynchronní HTTP callbacky, které informují klienty o událostech (např. GitHub webhooks).
- [ ] Typy API endpointů
- [ ] Bezpečnostní mechanismus
- [ ] N/A

### Jak se liší public, private a partner API?
- [x] Public API je otevřené pro všechny, private API pouze pro interní použití, partner API je omezeno na důvěryhodné třetí strany.
- [ ] Všechny typy jsou stejné
- [ ] Private API je nejbezpečnější typ
- [ ] N/A

### Jak funguje OpenAPI (Swagger)?
- [x] Specifikace pro dokumentaci a testování REST API.
- [ ] Programovací jazyk pro API
- [ ] Typ databáze
- [ ] N/A

### Jaké jsou hlavní bezpečnostní hrozby pro API?
- [x] SQL Injection, XSS, CSRF, man-in-the-middle útoky, brute force.
- [ ] API nemá bezpečnostní hrozby
- [ ] Pouze DDoS útoky
- [ ] N/A

### Jak API zvládá vysokou dostupnost (HA)?
- [x] Použitím load balancing, failover strategií, auto-scaling.
- [ ] HA není možná
- [ ] Pouze jedním serverem
- [ ] N/A

### Jak lze zlepšit API DX (developer experience)?
- [x] Kvalitní dokumentací, testovacími sandboxy, rychlou podporou a jasně definovanými standardy.
- [ ] DX není důležité
- [ ] Pouze rychlejší odpovědí
- [ ] N/A

## AWS

### Co je AWS?
- [x] Amazon Web Services (AWS) je cloudová platforma poskytující širokou škálu služeb, včetně výpočtových zdrojů, databází a úložišť.
- [ ] AWS je operační systém
- [ ] AWS je programovací jazyk
- [ ] N/A

### Jaké jsou hlavní výhody používání AWS?
- [x] Škálovatelnost, flexibilita, vysoká dostupnost, bezpečnost a široká nabídka služeb.
- [ ] Pouze nízká cena
- [ ] AWS nemá žádné výhody oproti on-premise
- [ ] N/A

### Co je EC2 v AWS?
- [x] Elastic Compute Cloud (EC2) poskytuje škálovatelné virtuální servery pro běh aplikací.
- [ ] EC2 je databázová služba
- [ ] EC2 je storage služba
- [ ] N/A

### Jaký je rozdíl mezi EC2 a Lambda?
- [x] EC2 poskytuje virtuální servery, Lambda umožňuje bezserverové výpočty na základě událostí.
- [ ] EC2 je novější verze Lambda
- [ ] Lambda je dražší než EC2
- [ ] N/A

### Co je Amazon S3?
- [x] Simple Storage Service (S3) je objektové úložiště pro ukládání libovolných dat.
- [ ] S3 je výpočetní služba
- [ ] S3 je databáze
- [ ] N/A

### Jaké jsou různé úrovně úložiště v Amazon S3?
- [x] Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier, Glacier Deep Archive.
- [ ] Pouze Standard a Premium
- [ ] S3 má pouze jednu úroveň
- [ ] N/A

### Co je AWS IAM?
- [x] Identity and Access Management (IAM) umožňuje správu uživatelů, rolí a oprávnění v AWS.
- [ ] IAM je monitoring služba
- [ ] IAM je storage služba
- [ ] N/A

### Jak fungují IAM Policies?
- [x] Definují oprávnění k AWS službám pomocí JSON pravidel.
- [ ] IAM Policies jsou napsány v YAML
- [ ] IAM Policies se konfigurují pouze přes GUI
- [ ] N/A

### Co je AWS VPC?
- [x] Virtual Private Cloud (VPC) umožňuje vytvoření izolovaného virtuálního sítě v AWS.
- [ ] VPC je databázová služba
- [ ] VPC je compute služba
- [ ] N/A

### Jak fungují Security Groups a NACLs v AWS?
- [x] Security Groups fungují jako firewall pro instance, NACLs jako firewall na úrovni subnetu.
- [ ] Security Groups a NACLs jsou totéž
- [ ] NACLs jsou pouze pro S3
- [ ] N/A

### Co je AWS Route 53?
- [x] Služba pro správu DNS s podporou směrování provozu a vysokou dostupností.
- [ ] Route 53 je storage služba
- [ ] Route 53 je compute služba
- [ ] N/A

### Jak funguje Elastic Load Balancer (ELB)?
- [x] Automaticky rozděluje příchozí provoz mezi více instancí pro vyšší dostupnost.
- [ ] ELB je databázová služba
- [ ] ELB ukládá soubory
- [ ] N/A

### Co je AWS Auto Scaling?
- [x] Automatické škálování EC2 instancí na základě aktuální zátěže.
- [ ] Auto Scaling je manuální proces
- [ ] Auto Scaling funguje pouze pro databáze
- [ ] N/A

### Jak funguje AWS CloudWatch?
- [x] Monitorovací služba pro AWS zdroje, umožňuje sledovat metriky a nastavovat alarmy.
- [ ] CloudWatch je storage služba
- [ ] CloudWatch je compute služba
- [ ] N/A

### Co je AWS CloudFormation?
- [x] Služba pro Infrastructure as Code (IaC), která umožňuje nasazování infrastruktury pomocí šablon.
- [ ] CloudFormation je monitoring služba
- [ ] CloudFormation je databáze
- [ ] N/A

### Jaké databázové služby AWS poskytuje?
- [x] Amazon RDS, DynamoDB, Redshift, Aurora, ElastiCache.
- [ ] Pouze MySQL
- [ ] AWS neposkytuje databázové služby
- [ ] N/A

### Jaký je rozdíl mezi Amazon RDS a DynamoDB?
- [x] RDS je relační databázová služba, DynamoDB je NoSQL databáze s nízkou latencí.
- [ ] RDS a DynamoDB jsou totéž
- [ ] DynamoDB je relační databáze
- [ ] N/A

### Co je AWS Lambda?
- [x] Bezserverová výpočetní služba, která spouští kód na základě událostí.
- [ ] Lambda je databáze
- [ ] Lambda je storage služba
- [ ] N/A

### Jak funguje Amazon SNS?
- [x] Simple Notification Service umožňuje publikování zpráv a jejich doručování prostřednictvím různých protokolů.
- [ ] SNS je databáze
- [ ] SNS je compute služba
- [ ] N/A

### Co je AWS SQS?
- [x] Simple Queue Service umožňuje asynchronní zpracování zpráv mezi službami.
- [ ] SQS je databáze
- [ ] SQS je compute služba
- [ ] N/A

### Jaký je rozdíl mezi SNS a SQS?
- [x] SNS je pub/sub systém, SQS je message queue pro asynchronní zpracování.
- [ ] SNS a SQS jsou totéž
- [ ] SQS je novější verze SNS
- [ ] N/A

### Co je AWS Glue?
- [x] Služba pro ETL procesy a integraci dat mezi různými zdroji.
- [ ] Glue je compute služba
- [ ] Glue je storage služba
- [ ] N/A

### Co je AWS Step Functions?
- [x] Služba pro orchestraci workflow v AWS.
- [ ] Step Functions je databáze
- [ ] Step Functions je storage služba
- [ ] N/A

### Jak funguje AWS Cognito?
- [x] Poskytuje autentizaci a autorizaci uživatelů pro webové a mobilní aplikace.
- [ ] Cognito je storage služba
- [ ] Cognito je compute služba
- [ ] N/A

### Co je AWS KMS?
- [x] Key Management Service poskytuje správu a šifrování klíčů.
- [ ] KMS je compute služba
- [ ] KMS je databáze
- [ ] N/A

### Jaký je rozdíl mezi AWS Glacier a S3 Standard?
- [x] Glacier je určen pro archivaci a dlouhodobé ukládání dat, S3 Standard pro rychlý přístup k datům.
- [ ] Glacier je rychlejší než S3
- [ ] S3 Standard je levnější než Glacier
- [ ] N/A

### Co je AWS EFS?
- [x] Elastic File System je škálovatelné sdílené úložiště pro EC2 instance.
- [ ] EFS je compute služba
- [ ] EFS je databáze
- [ ] N/A

### Jak funguje AWS Direct Connect?
- [x] Poskytuje privátní připojení mezi datacentrem a AWS.
- [ ] Direct Connect je storage služba
- [ ] Direct Connect je databáze
- [ ] N/A

### Co je AWS WAF?
- [x] Web Application Firewall chrání aplikace před útoky na webové vrstvě.
- [ ] WAF je storage služba
- [ ] WAF je databáze
- [ ] N/A

### Jak funguje AWS Secrets Manager?
- [x] Bezpečně ukládá a spravuje citlivé údaje, jako jsou přihlašovací údaje a API klíče.
- [ ] Secrets Manager je compute služba
- [ ] Secrets Manager je databáze
- [ ] N/A

### Co je AWS CloudTrail?
- [x] Umožňuje sledování akcí prováděných v AWS účtu.
- [ ] CloudTrail je storage služba
- [ ] CloudTrail je compute služba
- [ ] N/A

### Jak funguje AWS Elastic Beanstalk?
- [x] Platforma pro jednoduché nasazení a správu webových aplikací.
- [ ] Elastic Beanstalk je databáze
- [ ] Elastic Beanstalk je storage služba
- [ ] N/A

### Co je Amazon Lightsail?
- [x] Jednoduchá cloudová hostingová služba pro menší aplikace.
- [ ] Lightsail je databáze
- [ ] Lightsail je storage služba
- [ ] N/A

### Jaké typy instancí EC2 AWS nabízí?
- [x] General Purpose, Compute Optimized, Memory Optimized, Storage Optimized, GPU Instances.
- [ ] Pouze Standard a Premium
- [ ] EC2 má pouze jeden typ instance
- [ ] N/A

### Jak AWS podporuje hybridní cloud?
- [x] Pomocí AWS Outposts, Direct Connect, Storage Gateway.
- [ ] AWS nepodporuje hybridní cloud
- [ ] Pouze pomocí VPN
- [ ] N/A

### Co je AWS Fargate?
- [x] Bezserverová kontejnerová služba pro běh ECS a EKS bez správy serverů.
- [ ] Fargate je databáze
- [ ] Fargate je storage služba
- [ ] N/A

### Jaké jsou hlavní výhody AWS ECS oproti AWS EKS?
- [x] ECS je jednodušší na použití, EKS poskytuje plnou podporu Kubernetes.
- [ ] ECS a EKS jsou totéž
- [ ] EKS je jednodušší než ECS
- [ ] N/A

### Jak funguje AWS CodePipeline?
- [x] Služba CI/CD pro automatizaci nasazování aplikací.
- [ ] CodePipeline je databáze
- [ ] CodePipeline je storage služba
- [ ] N/A

### Co je AWS X-Ray?
- [x] Nástroj pro debugging a sledování distribuovaných aplikací.
- [ ] X-Ray je storage služba
- [ ] X-Ray je databáze
- [ ] N/A

### Jaké typy databází podporuje AWS Aurora?
- [x] Kompatibilní s MySQL a PostgreSQL.
- [ ] Pouze MongoDB
- [ ] Pouze Oracle
- [ ] N/A

### Jak AWS podporuje serverless architekturu?
- [x] Pomocí služeb jako Lambda, DynamoDB, API Gateway, Step Functions.
- [ ] AWS nepodporuje serverless
- [ ] Pouze pomocí EC2
- [ ] N/A

### Jak funguje AWS Transit Gateway?
- [x] Umožňuje propojení více VPC a on-premise sítí.
- [ ] Transit Gateway je databáze
- [ ] Transit Gateway je storage služba
- [ ] N/A

### Jak lze zabezpečit AWS účet?
- [x] Použitím MFA, IAM Policies, AWS Organizations.
- [ ] AWS účet nelze zabezpečit
- [ ] Pouze silným heslem
- [ ] N/A

### Co je AWS Outposts?
- [x] Hybridní cloudové řešení umožňující provoz AWS služeb v on-premise prostředí.
- [ ] Outposts je databáze
- [ ] Outposts je storage služba
- [ ] N/A

### Jak funguje AWS Organizations?
- [x] Umožňuje správu více AWS účtů pod jednou organizací.
- [ ] Organizations je compute služba
- [ ] Organizations je databáze
- [ ] N/A

### Jak funguje AWS Backup?
- [x] Centralizovaná služba pro automatizované zálohování AWS zdrojů.
- [ ] Backup je compute služba
- [ ] Backup je databáze
- [ ] N/A

### Co je AWS Macie?
- [x] Služba pro detekci citlivých dat a prevenci úniku informací.
- [ ] Macie je compute služba
- [ ] Macie je databáze
- [ ] N/A

### Jak AWS podporuje Machine Learning?
- [x] Prostřednictvím Amazon SageMaker, Rekognition, Comprehend.
- [ ] AWS nepodporuje ML
- [ ] Pouze pomocí EC2
- [ ] N/A

### Co je AWS Greengrass?
- [x] Služba pro provoz IoT aplikací na edge zařízeních.
- [ ] Greengrass je databáze
- [ ] Greengrass je storage služba
- [ ] N/A

### Jak funguje AWS Marketplace?
- [x] Poskytuje katalog softwarových řešení třetích stran pro nasazení v AWS.
- [ ] Marketplace je compute služba
- [ ] Marketplace je databáze
- [ ] N/A

## Kafka

### Co je Apache Kafka?
- [x] Kafka je distribuovaná platforma pro streamování dat určená pro zpracování velkých objemů zpráv v reálném čase.
- [ ] Kafka je relační databáze
- [ ] Kafka je webový server
- [ ] N/A

### Jaké jsou hlavní komponenty Apache Kafka?
- [x] Producer, Broker, Topic, Partition, Consumer, Zookeeper.
- [ ] Server, Client, Database
- [ ] Frontend, Backend, API
- [ ] N/A

### Co je Kafka Broker?
- [x] Server, který přijímá a uchovává zprávy v topikech a poskytuje je konzumentům.
- [ ] Klient který posílá zprávy
- [ ] Databáze pro ukládání zpráv
- [ ] N/A

### Co je Kafka Topic?
- [x] Logická jednotka pro ukládání zpráv, kam producenti zapisují a konzumenti čtou data.
- [ ] Typ databáze
- [ ] Konfigurace serveru
- [ ] N/A

### Jak fungují Kafka Partitions?
- [x] Topic je rozdělen na partitiony pro paralelní zpracování a škálovatelnost.
- [ ] Partitions jsou typy zpráv
- [ ] Partitions jsou konfigurace brokerů
- [ ] N/A

### Co je Kafka Producer?
- [x] Aplikace nebo služba, která posílá zprávy do topiců v Kafce.
- [ ] Server který ukládá zprávy
- [ ] Databáze pro zprávy
- [ ] N/A

### Co je Kafka Consumer?
- [x] Aplikace, která čte zprávy z topiců v Kafce.
- [ ] Server který posílá zprávy
- [ ] Databáze pro zprávy
- [ ] N/A

### Jak funguje Kafka Consumer Group?
- [x] Skupina konzumentů sdílející zátěž čtení zpráv z jednoho topicu.
- [ ] Skupina producentů
- [ ] Konfigurace brokerů
- [ ] N/A

### Jak Kafka zajišťuje odolnost proti výpadkům?
- [x] Pomocí replikace partition mezi brokery.
- [ ] Kafka není odolná proti výpadkům
- [ ] Pouze pomocí zálohování
- [ ] N/A

### Co je Kafka Zookeeper?
- [x] Služba, která spravuje metadata clusteru, koordinuje brokery a konzumenty.
- [ ] Zookeeper je databáze
- [ ] Zookeeper je webový server
- [ ] N/A

### Jak funguje replikace v Apache Kafka?
- [x] Každá partition může mít více replik uložených na různých brokerech pro vysokou dostupnost.
- [ ] Kafka nepodporuje replikaci
- [ ] Replikace funguje pouze pro producenty
- [ ] N/A

### Jak funguje vyvažování zátěže v Kafka Consumer Group?
- [x] Partitiony jsou distribuovány mezi členy skupiny a při změně počtu konzumentů dochází k rebalance.
- [ ] Vyvažování zátěže se neprovádí
- [ ] Každý konzument čte všechny partitiony
- [ ] N/A

### Jak Kafka zajišťuje pořadí zpráv?
- [x] Zprávy jsou v rámci jedné partition zpracovávány v pořadí, v jakém byly odeslány.
- [ ] Kafka nezaručuje pořadí zpráv
- [ ] Pořadí je určeno konzumentem
- [ ] N/A

### Co je Kafka Offset a jak funguje?
- [x] Offset označuje pozici zprávy v partition a umožňuje konzumentům obnovit čtení.
- [ ] Offset je typ zprávy
- [ ] Offset je konfigurace brokeru
- [ ] N/A

### Jak lze spravovat Kafka Offsets?
- [x] Automaticky pomocí Kafka Consumer API nebo manuálně uložením offsetů.
- [ ] Offsety nelze spravovat
- [ ] Pouze pomocí Zookeeper
- [ ] N/A

### Jaký je rozdíl mezi at-most-once, at-least-once a exactly-once doručením zpráv?
- [x] At-most-once: zpráva může být ztracena, At-least-once: může být zpracována vícekrát, Exactly-once: zpracována právě jednou.
- [ ] Všechny tři jsou totéž
- [ ] At-most-once je nejspolehlivější
- [ ] N/A

### Jak funguje Kafka Streams?
- [x] Kafka Streams je framework pro zpracování datových toků v reálném čase přímo z topiců.
- [ ] Kafka Streams je databáze
- [ ] Kafka Streams je webový server
- [ ] N/A

### Jak funguje Kafka Connect?
- [x] Nástroj pro integraci Kafky s externími systémy (databáze, cloud úložiště, služby).
- [ ] Kafka Connect je databáze
- [ ] Kafka Connect je webový server
- [ ] N/A

### Jak se Kafka liší od tradičních message brokerů (RabbitMQ, ActiveMQ)?
- [x] Kafka je více orientovaná na zpracování velkých objemů dat a poskytuje lepší škálovatelnost.
- [ ] Kafka a RabbitMQ jsou totéž
- [ ] Kafka je pomalejší než RabbitMQ
- [ ] N/A

### Jak funguje komprese zpráv v Kafce?
- [x] Kafka podporuje kompresi zpráv pomocí GZIP, Snappy nebo LZ4 pro úsporu šířky pásma a místa.
- [ ] Kafka nepodporuje kompresi
- [ ] Komprese je povinná
- [ ] N/A

### Jaká je role Kafka Retention Policy?
- [x] Definuje, jak dlouho jsou zprávy uchovávány v topicu (časově nebo podle velikosti).
- [ ] Retention Policy určuje počet replik
- [ ] Retention Policy je typ komprese
- [ ] N/A

### Co je compaction v Kafce?
- [x] Umožňuje uchovávat pouze nejnovější verzi zprávy s konkrétním klíčem.
- [ ] Compaction je typ komprese
- [ ] Compaction maže všechny zprávy
- [ ] N/A

### Jak implementovat transakce v Kafka?
- [x] Použitím idempotentních producentů a transakčního API pro exactly-once doručování.
- [ ] Kafka nepodporuje transakce
- [ ] Transakce jsou automatické
- [ ] N/A

### Jak spravovat bezpečnost v Apache Kafka?
- [x] Použitím TLS pro šifrování, SASL pro autentizaci a ACLs pro autorizaci.
- [ ] Kafka nemá bezpečnostní funkce
- [ ] Pouze pomocí firewallu
- [ ] N/A

### Jak funguje deduplikace zpráv v Kafce?
- [x] Pomocí idempotentních producentů a unikátního ID zprávy.
- [ ] Kafka automaticky deduplikuje všechny zprávy
- [ ] Deduplikace není možná
- [ ] N/A

### Jak funguje log segmentace v Kafce?
- [x] Partitiony jsou rozděleny do segmentů, které se postupně zapisují a odstraňují podle politiky.
- [ ] Segmentace není v Kafce podporována
- [ ] Všechny zprávy jsou v jednom souboru
- [ ] N/A

### Jaký je rozdíl mezi Compact a Delete strategií pro uchovávání zpráv?
- [x] Compact: uchovává pouze poslední verze zpráv podle klíče, Delete: odstraňuje zprávy po určitém čase.
- [ ] Compact a Delete jsou totéž
- [ ] Delete je rychlejší než Compact
- [ ] N/A

### Jak optimalizovat výkon Kafka producerů?
- [x] Nastavením batch.size, linger.ms a komprese.
- [ ] Výkon producerů nelze optimalizovat
- [ ] Pouze zvýšením počtu brokerů
- [ ] N/A

### Jak optimalizovat výkon Kafka consumerů?
- [x] Zvýšením paralelního zpracování, optimalizací offset managementu.
- [ ] Výkon consumerů nelze optimalizovat
- [ ] Pouze snížením počtu partitions
- [ ] N/A

### Jak funguje dead-letter queue v Kafka?
- [x] Umožňuje přesun chybně zpracovaných zpráv do speciálního topicu pro analýzu.
- [ ] Kafka nemá dead-letter queue
- [ ] Dead-letter queue maže všechny chybné zprávy
- [ ] N/A

### Jak monitorovat výkon Kafka clusteru?
- [x] Použitím nástrojů jako Prometheus, Grafana nebo Confluent Control Center.
- [ ] Kafka nelze monitorovat
- [ ] Pouze pomocí logů
- [ ] N/A

### Jaký je rozdíl mezi Kafka Streams a Apache Flink?
- [x] Kafka Streams je součástí Kafky, Flink je samostatný framework pro stream processing.
- [ ] Kafka Streams a Flink jsou totéž
- [ ] Flink je součástí Kafky
- [ ] N/A

### Jak spravovat škálovatelnost Kafka clusteru?
- [x] Přidáním brokerů, zvýšením počtu partition, optimalizací konfigurací.
- [ ] Kafka cluster nelze škálovat
- [ ] Pouze restartováním clusteru
- [ ] N/A

### Jak funguje Kafka MirrorMaker?
- [x] Nástroj pro replikaci dat mezi více Kafka clustery.
- [ ] MirrorMaker je databáze
- [ ] MirrorMaker je webový server
- [ ] N/A

### Jak lze zabezpečit přístup ke Kafce?
- [x] Použitím SSL/TLS, SASL autentizace a definováním přístupových práv v ACLs.
- [ ] Kafka nelze zabezpečit
- [ ] Pouze pomocí firewallu
- [ ] N/A

### Jaký je rozdíl mezi Apache Kafka a Pulsar?
- [x] Kafka je zaměřená na distribuované logování a stream processing, Pulsar podporuje multi-tenancy a messaging.
- [ ] Kafka a Pulsar jsou totéž
- [ ] Pulsar je starší než Kafka
- [ ] N/A

### Jak lze implementovat změnové záznamy (CDC) s Kafkou?
- [x] Použitím Kafka Connect s Debezium pro streamování změn z databází.
- [ ] Kafka nepodporuje CDC
- [ ] CDC funguje pouze s RabbitMQ
- [ ] N/A

### Jaký je rozdíl mezi Kafka a Redis Streams?
- [x] Kafka je distribuovaná message queue, Redis Streams jsou více orientovány na nízkou latenci.
- [ ] Kafka a Redis Streams jsou totéž
- [ ] Redis Streams je novější verze Kafka
- [ ] N/A

### Jaký je dopad velkého množství malých zpráv na výkon Kafky?
- [x] Zvyšuje latenci, zátěž na broker a overhead sítě, řešením je batching.
- [ ] Malé zprávy nemají dopad na výkon
- [ ] Malé zprávy zrychlují Kafku
- [ ] N/A

### Jak optimalizovat velikost clusteru pro vysokou dostupnost?
- [x] Použitím více brokerů, replikace partition a optimalizací politik uchovávání zpráv.
- [ ] Vysoká dostupnost vyžaduje pouze jeden broker
- [ ] Velikost clusteru nemá vliv na dostupnost
- [ ] N/A

## RabbitMQ

### Co je RabbitMQ?
- [x] RabbitMQ je open-source message broker, který umožňuje asynchronní komunikaci mezi systémy pomocí zpráv.
- [ ] RabbitMQ je relační databáze
- [ ] RabbitMQ je webový server
- [ ] N/A

### Jaké jsou hlavní komponenty RabbitMQ?
- [x] Producent, broker (exchange, queue), konzument.
- [ ] Server, Client, Database
- [ ] Frontend, Backend, API
- [ ] N/A

### Jak funguje exchange v RabbitMQ?
- [x] Exchange přijímá zprávy od producentů a směruje je do správných front na základě pravidel routování.
- [ ] Exchange je databáze
- [ ] Exchange je webový server
- [ ] N/A

### Jaké jsou typy exchange v RabbitMQ?
- [x] Direct, Fanout, Topic, Headers.
- [ ] Pouze Direct a Fanout
- [ ] RabbitMQ má pouze jeden typ exchange
- [ ] N/A

### Jak funguje Direct Exchange?
- [x] Zprávy jsou směrovány do front podle přesné shody routing klíče.
- [ ] Direct Exchange posílá zprávy do všech front
- [ ] Direct Exchange je databáze
- [ ] N/A

### Jak funguje Fanout Exchange?
- [x] Zprávy jsou odeslány do všech připojených front bez ohledu na routing klíč.
- [ ] Fanout Exchange posílá zprávy pouze do jedné fronty
- [ ] Fanout Exchange je databáze
- [ ] N/A

### Jak funguje Topic Exchange?
- [x] Umožňuje směrování zpráv na základě vzorů v routing klíči.
- [ ] Topic Exchange je totéž jako Direct Exchange
- [ ] Topic Exchange nepodporuje vzory
- [ ] N/A

### Jak funguje Headers Exchange?
- [x] Zprávy jsou směrovány podle hodnot hlaviček namísto routing klíče.
- [ ] Headers Exchange je totéž jako Direct Exchange
- [ ] Headers Exchange nepodporuje hlavičky
- [ ] N/A

### Jaké jsou hlavní výhody RabbitMQ oproti jiným message brokerům?
- [x] Podpora různých protokolů, vysoká flexibilita routování, jednoduchá integrace.
- [ ] RabbitMQ nemá žádné výhody
- [ ] RabbitMQ podporuje pouze jeden protokol
- [ ] N/A

### Jak RabbitMQ zajišťuje spolehlivost doručení zpráv?
- [x] Použitím potvrzení zpráv (ACK), durable queue a persistovaných zpráv.
- [ ] RabbitMQ nezaručuje spolehlivost
- [ ] Pouze pomocí replikace
- [ ] N/A

### Jak funguje potvrzení doručení zpráv (ACK/NACK) v RabbitMQ?
- [x] Konzument potvrzuje přijetí zprávy (ACK) nebo ji odmítne (NACK) pro opětovné doručení.
- [ ] ACK a NACK jsou totéž
- [ ] RabbitMQ nepodporuje potvrzení
- [ ] N/A

### Jak RabbitMQ řeší vyrovnávání zátěže mezi konzumenty?
- [x] Zprávy jsou rozdělovány mezi konzumenty ve stejné skupině podle dostupnosti.
- [ ] RabbitMQ nepodporuje vyrovnávání zátěže
- [ ] Všechny zprávy jdou k jednomu konzumentu
- [ ] N/A

### Jak lze zajistit trvanlivost zpráv v RabbitMQ?
- [x] Použitím durable queue a persistentních zpráv.
- [ ] Trvanlivost nelze zajistit
- [ ] Pouze pomocí replikace
- [ ] N/A

### Co je prefetch v RabbitMQ?
- [x] Nastavení maximálního počtu zpráv, které může konzument zpracovávat najednou.
- [ ] Prefetch je typ exchange
- [ ] Prefetch je databáze
- [ ] N/A

### Jak lze zabezpečit RabbitMQ?
- [x] Použitím autentizace, TLS šifrování a správou oprávnění pomocí vhost a uživatelských rolí.
- [ ] RabbitMQ nelze zabezpečit
- [ ] Pouze pomocí firewallu
- [ ] N/A

### Jak RabbitMQ podporuje horizontální škálování?
- [x] Použitím clusterů a federace mezi více instancemi RabbitMQ.
- [ ] RabbitMQ nepodporuje škálování
- [ ] Pouze pomocí jedné instance
- [ ] N/A

### Jak funguje dead-letter queue (DLQ) v RabbitMQ?
- [x] Umožňuje ukládání neúspěšně zpracovaných zpráv do speciální fronty.
- [ ] RabbitMQ nemá dead-letter queue
- [ ] DLQ maže všechny zprávy
- [ ] N/A

### Jaký je rozdíl mezi pull a push mode v RabbitMQ?
- [x] Konzumenti dostávají zprávy push modelově (automaticky) nebo si je mohou sami načítat.
- [ ] Pull a push mode jsou totéž
- [ ] RabbitMQ podporuje pouze push mode
- [ ] N/A

### Jak lze integrovat RabbitMQ s jinými systémy?
- [x] Pomocí pluginů, API nebo prostřednictvím protokolů jako AMQP, MQTT, STOMP.
- [ ] RabbitMQ nelze integrovat
- [ ] Pouze pomocí REST API
- [ ] N/A

### Jak monitorovat RabbitMQ?
- [x] Použitím RabbitMQ Management Plugin, Prometheus, Grafana.
- [ ] RabbitMQ nelze monitorovat
- [ ] Pouze pomocí logů
- [ ] N/A

### Jak RabbitMQ podporuje message prioritization?
- [x] Použitím front s prioritami, kde zprávy s vyšší prioritou jsou zpracovány dříve.
- [ ] RabbitMQ nepodporuje priority
- [ ] Všechny zprávy mají stejnou prioritu
- [ ] N/A

### Co je federace v RabbitMQ?
- [x] Mechanismus pro propojení více RabbitMQ clusterů.
- [ ] Federace je typ exchange
- [ ] Federace je databáze
- [ ] N/A

### Jaké protokoly podporuje RabbitMQ?
- [x] AMQP, MQTT, STOMP, HTTP.
- [ ] Pouze AMQP
- [ ] RabbitMQ nepodporuje žádné protokoly
- [ ] N/A

### Jak funguje RabbitMQ clustering?
- [x] Spojením více RabbitMQ uzlů do clusteru pro vyšší dostupnost a škálování.
- [ ] RabbitMQ nepodporuje clustering
- [ ] Clustering je typ exchange
- [ ] N/A

### Jak funguje RabbitMQ Shovel?
- [x] Umožňuje přenos zpráv mezi RabbitMQ instancemi.
- [ ] Shovel je typ exchange
- [ ] Shovel je databáze
- [ ] N/A

### Jaký je rozdíl mezi transient a durable queue?
- [x] Durable queue přetrvává po restartu serveru, transient queue ne.
- [ ] Transient a durable queue jsou totéž
- [ ] Transient queue je rychlejší
- [ ] N/A

### Jaký je rozdíl mezi persistentní a ne-persistentní zprávou?
- [x] Persistentní zpráva je uložena na disk, ne-persistentní pouze v paměti.
- [ ] Persistentní a ne-persistentní zprávy jsou totéž
- [ ] Ne-persistentní zpráva je bezpečnější
- [ ] N/A

### Jak funguje delayed message exchange v RabbitMQ?
- [x] Zprávy mohou být doručeny do fronty se zpožděním.
- [ ] RabbitMQ nepodporuje zpoždění zpráv
- [ ] Delayed exchange je databáze
- [ ] N/A

### Jak implementovat failover v RabbitMQ?
- [x] Použitím mirrored queues a clusteringu.
- [ ] Failover není možný
- [ ] Pouze restartováním serveru
- [ ] N/A

### Jak RabbitMQ podporuje asynchronní zpracování úloh?
- [x] Použitím fronty, kde producent posílá úkoly a konzumenti je zpracovávají.
- [ ] RabbitMQ nepodporuje asynchronní zpracování
- [ ] Pouze synchronní zpracování
- [ ] N/A

### Jaké jsou hlavní rozdíly mezi RabbitMQ a Kafka?
- [x] RabbitMQ je message broker pro tradiční messaging, Kafka je distribuovaná streamovací platforma.
- [ ] RabbitMQ a Kafka jsou totéž
- [ ] Kafka je novější verze RabbitMQ
- [ ] N/A

### Jak funguje lazy queue v RabbitMQ?
- [x] Fronta ukládá zprávy primárně na disk pro efektivní využití paměti.
- [ ] Lazy queue je rychlejší než normální
- [ ] Lazy queue neukládá zprávy
- [ ] N/A

### Jak funguje priority queue v RabbitMQ?
- [x] Zprávy jsou doručovány podle priority nastavené producentem.
- [ ] Priority queue je totéž jako normální queue
- [ ] RabbitMQ nepodporuje priority queue
- [ ] N/A

### Jak RabbitMQ podporuje idempotenci?
- [x] Použitím message deduplication nebo unikátních ID zpráv.
- [ ] RabbitMQ nepodporuje idempotenci
- [ ] Idempotence je automatická
- [ ] N/A

### Jak implementovat request-reply pattern v RabbitMQ?
- [x] Použitím reply queue a correlation ID.
- [ ] Request-reply není možný
- [ ] Pouze pomocí HTTP
- [ ] N/A

### Jak funguje consumer acknowledgement v RabbitMQ?
- [x] Konzument musí potvrdit přijetí zprávy, jinak se může znovu doručit.
- [ ] Acknowledgement je automatický
- [ ] RabbitMQ nepodporuje acknowledgement
- [ ] N/A

### Jak RabbitMQ podporuje multi-tenancy?
- [x] Pomocí virtuálních hostů (vhosts), které umožňují izolaci různých aplikací.
- [ ] RabbitMQ nepodporuje multi-tenancy
- [ ] Multi-tenancy je typ exchange
- [ ] N/A

### Jak funguje RabbitMQ v kontejnerizovaném prostředí (Docker/Kubernetes)?
- [x] Nasazením pomocí Helm chartů nebo Kubernetes StatefulSets.
- [ ] RabbitMQ nelze kontejnerizovat
- [ ] Pouze pomocí Dockeru
- [ ] N/A

### Jaké jsou nevýhody RabbitMQ?
- [x] Vyšší latence oproti Kafka, větší režie při velkých objemech zpráv.
- [ ] RabbitMQ nemá žádné nevýhody
- [ ] RabbitMQ je nejrychlejší message broker
- [ ] N/A

### Jaký je nejlepší způsob optimalizace výkonu RabbitMQ?
- [x] Použitím lazy queues, správným nastavením prefetch count a optimalizací routing strategií.
- [ ] Výkon RabbitMQ nelze optimalizovat
- [ ] Pouze zvýšením RAM
- [ ] N/A

## Continuous Delivery

### Co je Continuous Delivery (CD)?
- [x] Continuous Delivery je metodologie vývoje softwaru, která umožňuje časté a spolehlivé nasazování změn do produkčního prostředí.
- [ ] CD je programovací jazyk
- [ ] CD je typ databáze
- [ ] N/A

### Jaký je rozdíl mezi Continuous Integration, Continuous Delivery a Continuous Deployment?
- [x] CI automatizuje sestavení a testování kódu, CD automatizuje přípravu nasazení a Continuous Deployment zajišťuje plně automatické nasazení změn do produkce.
- [ ] CI, CD a Continuous Deployment jsou totéž
- [ ] CI je novější verze CD
- [ ] N/A

### Jaké jsou hlavní výhody Continuous Delivery?
- [x] Rychlejší dodávání funkcí, snížení rizika nasazení, vyšší kvalita softwaru.
- [ ] CD nemá žádné výhody
- [ ] CD zpomaluje vývoj
- [ ] N/A

### Jaké jsou hlavní kroky pipeline v Continuous Delivery?
- [x] Build, testování, schválení, nasazení.
- [ ] Pouze build a nasazení
- [ ] CD nemá pipeline
- [ ] N/A

### Jaké nástroje se běžně používají pro Continuous Delivery?
- [x] Jenkins, GitHub Actions, GitLab CI/CD, CircleCI, AWS CodePipeline.
- [ ] Pouze Jenkins
- [ ] CD nevyžaduje nástroje
- [ ] N/A

### Jak Continuous Delivery zlepšuje stabilitu softwaru?
- [x] Automatizovaným testováním a postupným nasazováním změn.
- [ ] CD nezlepšuje stabilitu
- [ ] Pouze manuálním testováním
- [ ] N/A

### Co je artefakt v Continuous Delivery?
- [x] Binární soubor nebo balíček připravený k nasazení do produkčního prostředí.
- [ ] Artefakt je typ databáze
- [ ] Artefakt je konfigurace
- [ ] N/A

### Jak Continuous Delivery podporuje rollbacky?
- [x] Umožňuje rychlý návrat na předchozí verzi aplikace v případě problému.
- [ ] CD nepodporuje rollbacky
- [ ] Rollbacky jsou manuální
- [ ] N/A

### Jaké testovací fáze jsou důležité v Continuous Delivery?
- [x] Unit testy, integrační testy, akceptační testy, performance testy.
- [ ] Pouze unit testy
- [ ] CD nevyžaduje testy
- [ ] N/A

### Jaký je rozdíl mezi modrým/zeleným nasazením a canary deploymentem?
- [x] Blue/Green deployment přepíná mezi dvěma produkčními prostředími, zatímco Canary deployment nasazuje změny na malou část uživatelů před plným nasazením.
- [ ] Blue/Green a Canary jsou totéž
- [ ] Canary je rychlejší než Blue/Green
- [ ] N/A

### Jaké jsou největší výzvy při implementaci Continuous Delivery?
- [x] Správné nastavení automatizovaných testů, řízení konfigurace, bezpečnostní požadavky.
- [ ] CD nemá žádné výzvy
- [ ] Pouze náklady na nástroje
- [ ] N/A

### Jak Continuous Delivery pomáhá DevOps přístupu?
- [x] Umožňuje rychlejší nasazování změn a usnadňuje spolupráci mezi vývojáři a operacemi.
- [ ] CD není součástí DevOps
- [ ] CD zpomaluje DevOps
- [ ] N/A

### Jaká je role feature toggles v Continuous Delivery?
- [x] Umožňují povolení nebo zakázání funkcí bez nutnosti nasazení nové verze aplikace.
- [ ] Feature toggles jsou typ databáze
- [ ] Feature toggles nejsou součástí CD
- [ ] N/A

### Jak funguje A/B testing v rámci Continuous Delivery?
- [x] Umožňuje testování různých verzí aplikace na reálných uživatelích pro optimalizaci konverzí.
- [ ] A/B testing není součástí CD
- [ ] A/B testing je typ databáze
- [ ] N/A

### Jak Continuous Delivery ovlivňuje vývojový cyklus softwaru?
- [x] Zkracuje dobu mezi vývojem a nasazením, umožňuje častější iterace.
- [ ] CD prodlužuje vývojový cyklus
- [ ] CD nemá vliv na vývojový cyklus
- [ ] N/A

### Jak Continuous Delivery ovlivňuje bezpečnost aplikací?
- [x] Automatizovaným testováním bezpečnosti, kontrolou závislostí a pravidelnými aktualizacemi.
- [ ] CD snižuje bezpečnost
- [ ] CD nemá vliv na bezpečnost
- [ ] N/A

### Jak zajistit dohled nad Continuous Delivery pipeline?
- [x] Použitím monitorovacích nástrojů, alertů a logování.
- [ ] Dohled není potřeba
- [ ] Pouze manuální kontrolou
- [ ] N/A

### Jak se Continuous Delivery implementuje v mikroservisní architektuře?
- [x] Pomocí oddělených pipeline pro jednotlivé služby a nezávislým nasazováním.
- [ ] CD nelze použít v mikroservisách
- [ ] Všechny služby se nasazují společně
- [ ] N/A

### Jak Continuous Delivery podporuje Infrastructure as Code (IaC)?
- [x] Automatizovaným nasazováním infrastruktury pomocí Terraform, CloudFormation nebo Ansible.
- [ ] CD nepodporuje IaC
- [ ] IaC je manuální proces
- [ ] N/A

### Jaké metriky jsou důležité pro Continuous Delivery?
- [x] Frekvence nasazení, průměrná doba nasazení, míra selhání nasazení, čas na opravu selhání.
- [ ] CD nevyžaduje metriky
- [ ] Pouze počet nasazení
- [ ] N/A

## Cryptography

### Co je kryptografie?
- [x] Kryptografie je věda o zabezpečení informací pomocí šifrování, hashování a dalších technik.
- [ ] Kryptografie je programovací jazyk
- [ ] Kryptografie je typ databáze
- [ ] N/A

### Jaký je rozdíl mezi symetrickou a asymetrickou kryptografií?
- [x] Symetrická kryptografie používá stejný klíč pro šifrování i dešifrování, asymetrická kryptografie využívá veřejný a soukromý klíč.
- [ ] Symetrická a asymetrická kryptografie jsou totéž
- [ ] Asymetrická kryptografie je rychlejší
- [ ] N/A

### Co je hashovací funkce?
- [x] Jednosměrná funkce, která převede vstup na pevně dlouhý řetězec znaků (hash).
- [ ] Hashovací funkce je typ šifrování
- [ ] Hashovací funkce umožňuje dešifrování
- [ ] N/A

### Jaké jsou příklady hashovacích algoritmů?
- [x] MD5, SHA-1, SHA-256, SHA-512, BLAKE2.
- [ ] Pouze MD5
- [ ] Hashovací algoritmy neexistují
- [ ] N/A

### Co je digitální podpis?
- [x] Kryptografická metoda ověřování pravosti a integrity zprávy pomocí asymetrické kryptografie.
- [ ] Digitální podpis je obrázek podpisu
- [ ] Digitální podpis je heslo
- [ ] N/A

### Jaký je rozdíl mezi šifrováním a hashováním?
- [x] Šifrování umožňuje zpětné dešifrování dat, hashování je jednosměrná operace.
- [ ] Šifrování a hashování jsou totéž
- [ ] Hashování umožňuje dešifrování
- [ ] N/A

### Co je salting v kontextu hashování hesel?
- [x] Přidání náhodné hodnoty k heslu před jeho hashováním pro zvýšení bezpečnosti.
- [ ] Salting je typ šifrování
- [ ] Salting snižuje bezpečnost
- [ ] N/A

### Jak funguje HMAC?
- [x] Hash-based Message Authentication Code kombinuje hashovací funkci a tajný klíč k ověření integrity zprávy.
- [ ] HMAC je typ šifrování
- [ ] HMAC je databáze
- [ ] N/A

### Co je kryptografický nonce?
- [x] Náhodná hodnota použitá k zabránění opětovnému použití stejných šifrovacích klíčů nebo transakcí.
- [ ] Nonce je typ hesla
- [ ] Nonce je databáze
- [ ] N/A

### Co znamená end-to-end šifrování (E2EE)?
- [x] Komunikace, kde data jsou šifrována na straně odesílatele a dešifrována až na straně příjemce.
- [ ] E2EE je typ databáze
- [ ] E2EE umožňuje serveru číst zprávy
- [ ] N/A

### Jaký je rozdíl mezi block cipher a stream cipher?
- [x] Block cipher šifruje pevně dlouhé bloky dat, stream cipher šifruje data po jednotlivých bitech.
- [ ] Block cipher a stream cipher jsou totéž
- [ ] Stream cipher je pomalejší
- [ ] N/A

### Co je AES a proč se používá?
- [x] Advanced Encryption Standard je široce používaný symetrický šifrovací algoritmus považovaný za bezpečný.
- [ ] AES je typ databáze
- [ ] AES je zastaralý algoritmus
- [ ] N/A

### Jak funguje RSA šifrování?
- [x] Asymetrický algoritmus, který používá soukromý a veřejný klíč pro šifrování a dešifrování.
- [ ] RSA je symetrický algoritmus
- [ ] RSA je typ databáze
- [ ] N/A

### Jaký je účel TLS/SSL v kryptografii?
- [x] Zabezpečení síťové komunikace mezi klientem a serverem šifrováním dat.
- [ ] TLS/SSL je typ databáze
- [ ] TLS/SSL komprimuje data
- [ ] N/A

### Co je Perfect Forward Secrecy (PFS)?
- [x] Bezpečnostní vlastnost, která zabraňuje kompromitaci dříve šifrované komunikace v případě úniku klíče.
- [ ] PFS je typ šifrování
- [ ] PFS je databáze
- [ ] N/A

### Co je kryptografická entropie?
- [x] Míra náhodnosti klíčů nebo jiných kryptografických prvků.
- [ ] Entropie je typ šifrování
- [ ] Entropie je databáze
- [ ] N/A

### Jak funguje elliptic curve cryptography (ECC)?
- [x] Kryptografický algoritmus využívající eliptické křivky pro efektivnější šifrování.
- [ ] ECC je typ databáze
- [ ] ECC je zastaralý algoritmus
- [ ] N/A

### Jaké jsou hlavní hrozby v kryptografii?
- [x] Brute-force útoky, útoky na postranní kanály, kvantová kryptografie, slabé klíče.
- [ ] Kryptografie nemá žádné hrozby
- [ ] Pouze brute-force útoky
- [ ] N/A

### Jak funguje kvantová kryptografie?
- [x] Využívá kvantové vlastnosti částic k zabezpečení komunikace (např. kvantová distribuce klíčů - QKD).
- [ ] Kvantová kryptografie je totéž jako klasická
- [ ] Kvantová kryptografie je databáze
- [ ] N/A

### Jak se chránit před útoky typu man-in-the-middle (MITM)?
- [x] Použitím TLS/SSL, certifikátů, digitálních podpisů a HSTS.
- [ ] MITM útoky nelze zabránit
- [ ] Pouze pomocí hesel
- [ ] N/A

### Jaký je rozdíl mezi veřejným a soukromým klíčem v asymetrické kryptografii?
- [x] Veřejný klíč je určen k šifrování, soukromý k dešifrování a podpisu.
- [ ] Veřejný a soukromý klíč jsou totéž
- [ ] Soukromý klíč se sdílí s ostatními
- [ ] N/A

### Co je Key Derivation Function (KDF)?
- [x] Funkce pro generování klíčů z hesel, například PBKDF2, bcrypt, Argon2.
- [ ] KDF je typ databáze
- [ ] KDF je šifrovací algoritmus
- [ ] N/A

### Co je homomorfní šifrování?
- [x] Kryptografická technika umožňující provádění výpočtů nad šifrovanými daty bez jejich dešifrování.
- [ ] Homomorfní šifrování je totéž jako AES
- [ ] Homomorfní šifrování je databáze
- [ ] N/A

### Jaký je rozdíl mezi online a offline útokem na šifrování?
- [x] Online útok probíhá během komunikace, offline útok analyzuje zachycená data.
- [ ] Online a offline útoky jsou totéž
- [ ] Offline útok je rychlejší
- [ ] N/A

### Jaká je role digitálních certifikátů?
- [x] Potvrzují pravost veřejného klíče a identity subjektu.
- [ ] Certifikáty jsou typ hesla
- [ ] Certifikáty šifrují data
- [ ] N/A

### Jak funguje Diffie-Hellman key exchange?
- [x] Protokol pro bezpečnou výměnu kryptografických klíčů mezi dvěma stranami.
- [ ] Diffie-Hellman je typ databáze
- [ ] Diffie-Hellman je šifrovací algoritmus
- [ ] N/A

### Jaký je účel zero-knowledge proof (ZKP)?
- [x] Umožňuje ověřit pravdivost tvrzení, aniž by odhalil další informace.
- [ ] ZKP je typ šifrování
- [ ] ZKP je databáze
- [ ] N/A

### Co je cryptographic backdoor?
- [x] Úmyslně vložená zranitelnost v šifrovacím algoritmu pro neoprávněný přístup.
- [ ] Backdoor je typ bezpečného šifrování
- [ ] Backdoor zvyšuje bezpečnost
- [ ] N/A

### Jak funguje šifrování na úrovni databáze?
- [x] Ukládání dat ve formě šifrovaných hodnot pomocí Transparent Data Encryption (TDE) nebo Column-Level Encryption.
- [ ] Databázové šifrování není možné
- [ ] Šifrování zpomaluje databázi
- [ ] N/A

### Jaké jsou základní požadavky na bezpečný kryptografický algoritmus?
- [x] Odolnost vůči brute-force útokům, vysoká entropie klíčů, absence známých zranitelností.
- [ ] Pouze rychlost
- [ ] Pouze jednoduchost
- [ ] N/A

## OWASP

### Co je OWASP?
- [x] OWASP (Open Web Application Security Project) je organizace zaměřená na zvyšování bezpečnosti webových aplikací.
- [ ] OWASP je programovací jazyk
- [ ] OWASP je typ databáze
- [ ] N/A

### Co je OWASP Top 10?
- [x] Seznam deseti nejkritičtějších bezpečnostních rizik pro webové aplikace, aktualizovaný pravidelně OWASP organizací.
- [ ] OWASP Top 10 je programovací jazyk
- [ ] OWASP Top 10 je typ databáze
- [ ] N/A

### Jaké jsou nejčastější zranitelnosti podle OWASP Top 10?
- [x] SQL Injection, Cross-Site Scripting (XSS), Broken Authentication, Insecure Deserialization, Security Misconfiguration, atd.
- [ ] Pouze SQL Injection
- [ ] OWASP Top 10 neobsahuje zranitelnosti
- [ ] N/A

### Co je SQL Injection a jak se mu bránit?
- [x] Útok, kdy útočník vkládá SQL příkazy do vstupů aplikace. Ochrana: použití připravených dotazů (prepared statements) a ORM.
- [ ] SQL Injection je typ databáze
- [ ] SQL Injection nelze zabránit
- [ ] N/A

### Co je Cross-Site Scripting (XSS)?
- [x] Útok, kdy útočník vkládá škodlivý JavaScript do aplikace, který se pak spouští v prohlížeči oběti.
- [ ] XSS je typ databáze
- [ ] XSS je bezpečnostní mechanismus
- [ ] N/A

### Jak chránit aplikaci proti XSS?
- [x] Použitím escaping technik (htmlspecialchars v PHP, ESAPI.encoder().encodeForHTML v Java), Content Security Policy (CSP).
- [ ] XSS nelze zabránit
- [ ] Pouze pomocí firewallu
- [ ] N/A

### Co je Cross-Site Request Forgery (CSRF)?
- [x] Útok, kdy útočník přiměje oběť k neúmyslnému vykonání požadavku na serveru.
- [ ] CSRF je typ databáze
- [ ] CSRF je bezpečnostní mechanismus
- [ ] N/A

### Jak ochránit aplikaci před CSRF?
- [x] Použitím CSRF tokenů, SameSite cookies a ověřením HTTP refereru.
- [ ] CSRF nelze zabránit
- [ ] Pouze pomocí HTTPS
- [ ] N/A

### Co znamená Broken Authentication?
- [x] Situace, kdy autentizační mechanismy nefungují správně, což umožňuje neoprávněný přístup.
- [ ] Broken Authentication je typ databáze
- [ ] Broken Authentication je bezpečnostní funkce
- [ ] N/A

### Jaké jsou nejlepší praktiky pro zabezpečení hesel?
- [x] Použití bcrypt, Argon2, PBKDF2 pro hashování hesel, zákaz ukládání hesel v plaintextu.
- [ ] Uložení hesel v plaintextu
- [ ] Použití MD5 pro hashování
- [ ] N/A

### Co je Security Misconfiguration?
- [x] Nesprávná konfigurace bezpečnostních nastavení, např. výchozí hesla, zapnuté debug módy, nechráněné API.
- [ ] Security Misconfiguration je typ databáze
- [ ] Security Misconfiguration je bezpečnostní funkce
- [ ] N/A

### Co je XML External Entity (XXE) útok?
- [x] Útok využívající špatnou konfiguraci XML parseru k načtení citlivých souborů nebo spuštění škodlivého kódu.
- [ ] XXE je typ databáze
- [ ] XXE je bezpečnostní funkce
- [ ] N/A

### Jak se bránit XXE útoku?
- [x] Použitím moderních knihoven místo XML parserů, zakázáním externích entit v XML parseru.
- [ ] XXE útoku nelze zabránit
- [ ] Pouze pomocí HTTPS
- [ ] N/A

### Co je Insecure Deserialization?
- [x] Útok, kdy útočník vkládá škodlivý objekt do serializovaných dat a spouští nebezpečný kód.
- [ ] Insecure Deserialization je typ databáze
- [ ] Insecure Deserialization je bezpečnostní funkce
- [ ] N/A

### Jak se bránit Insecure Deserialization?
- [x] Použitím digitálních podpisů pro ověřování serializovaných dat, validací vstupních dat.
- [ ] Insecure Deserialization nelze zabránit
- [ ] Pouze pomocí HTTPS
- [ ] N/A

### Co znamená principle of least privilege?
- [x] Princip, kdy uživatelé a aplikace mají pouze minimální potřebná oprávnění.
- [ ] Všichni uživatelé mají plná oprávnění
- [ ] Principle of least privilege je typ databáze
- [ ] N/A

### Jaký je rozdíl mezi autentizací a autorizací?
- [x] Autentizace ověřuje identitu uživatele, autorizace určuje, k čemu má uživatel přístup.
- [ ] Autentizace a autorizace jsou totéž
- [ ] Autorizace ověřuje identitu
- [ ] N/A

### Jak správně spravovat API klíče?
- [x] Ukládáním v bezpečných úložištích (např. AWS Secrets Manager), omezením oprávnění a rotací klíčů.
- [ ] API klíče se ukládají v kódu
- [ ] API klíče se sdílejí veřejně
- [ ] N/A

### Jak funguje Multi-Factor Authentication (MFA)?
- [x] Přidání druhého faktoru (SMS kód, biometrie) k ověření identity uživatele.
- [ ] MFA používá pouze heslo
- [ ] MFA snižuje bezpečnost
- [ ] N/A

### Co je bezpečné logování?
- [x] Logování bez citlivých dat (hesla, API klíče), šifrování logů, řízení přístupu k logům.
- [ ] Logování všech dat včetně hesel
- [ ] Logování není důležité
- [ ] N/A

### Co je Content Security Policy (CSP) a proč se používá?
- [x] Bezpečnostní mechanismus, který omezuje načítání neautorizovaných skriptů a zdrojů, čímž brání XSS útokům.
- [ ] CSP je typ databáze
- [ ] CSP zpomaluje aplikace
- [ ] N/A

### Jak funguje rate limiting a jak chrání aplikace?
- [x] Omezuje počet požadavků z jedné IP adresy za určitý časový interval, čímž chrání před DDoS útoky a brute-force útoky.
- [ ] Rate limiting zpomaluje aplikace
- [ ] Rate limiting není bezpečnostní funkce
- [ ] N/A

### Co je secure cookie a jak ji nastavit?
- [x] Cookie označená jako Secure (přenášena pouze přes HTTPS) a HttpOnly (nepřístupná JavaScriptem).
- [ ] Secure cookie je typ databáze
- [ ] Secure cookies snižují bezpečnost
- [ ] N/A

### Jak zabránit Clickjacking útokům?
- [x] Použitím hlavičky X-Frame-Options: DENY nebo Content-Security-Policy: frame-ancestors 'none'.
- [ ] Clickjacking útokům nelze zabránit
- [ ] Pouze pomocí HTTPS
- [ ] N/A

### Jaká je role penetration testingu v zabezpečení aplikací?
- [x] Simulace útoků pro identifikaci zranitelností a testování odolnosti aplikace.
- [ ] Penetration testing snižuje bezpečnost
- [ ] Penetration testing je typ databáze
- [ ] N/A

### Jak funguje bezpečné ukládání uživatelských dat?
- [x] Šifrování citlivých informací, omezení přístupu, minimalizace ukládání.
- [ ] Všechna data se ukládají v plaintextu
- [ ] Bezpečné ukládání není potřeba
- [ ] N/A

### Co je OWASP Dependency-Check?
- [x] Nástroj pro detekci zranitelností v závislostech aplikace.
- [ ] Dependency-Check je typ databáze
- [ ] Dependency-Check je programovací jazyk
- [ ] N/A

### Jak se chránit před bezpečnostními hrozbami při používání třetích stran?
- [x] Pravidelnou aktualizací závislostí, ověřováním reputace dodavatelů, kontrolou digitálních podpisů.
- [ ] Třetí strany jsou vždy bezpečné
- [ ] Závislosti není třeba aktualizovat
- [ ] N/A

### Jak zajistit bezpečnost při nasazování aplikací?
- [x] Použitím CI/CD pipeline s bezpečnostními kontrolami, auditováním kódu a skenováním zranitelností.
- [ ] Bezpečnost při nasazování není důležitá
- [ ] Pouze manuální kontrolou
- [ ] N/A

### Jak zajistit bezpečnost při přenosu dat mezi servery?
- [x] Použitím TLS/SSL, šifrováním citlivých dat, validací certifikátů.
- [ ] Přenos dat není třeba zabezpečovat
- [ ] Pouze pomocí VPN
- [ ] N/A

## React.js

### K čemu slouží Virtual DOM v Reactu?
- [x] K porovnání změn mezi předchozím a novým stromem komponent a k minimalizaci nutných úprav skutečného DOM.
- [ ] K ukládání globálního stavu celé aplikace.
- [ ] K automatickému cachování všech API odpovědí.
- [ ] K nahrazení JavaScriptu při renderování komponent.

### Proč je důležité používat stabilní key při renderování seznamu?
- [x] Aby React správně poznal, které položky se změnily, přesunuly nebo odstranily.
- [ ] Aby bylo možné používat useState uvnitř map().
- [ ] Aby React mohl seznam vyrenderovat pouze na serveru.
- [ ] Aby byly položky seznamu automaticky seřazené.

### Co se stane po zavolání setteru z useState?
- [x] React naplánuje nový render komponenty s aktualizovanou hodnotou stavu.
- [ ] Stav se přepíše okamžitě bez dalšího renderu.
- [ ] Komponenta se vždy kompletně odpojí a znovu připojí.
- [ ] Změna se projeví až po reloadu stránky.

### Co typicky znamená useEffect s prázdným dependency polem?
- [x] Efekt se spustí po prvním renderu komponenty a cleanup při unmountu.
- [ ] Efekt se spouští po každém renderu.
- [ ] Efekt se nikdy nespustí.
- [ ] Efekt se spustí pouze při změně props.

### Kdy má smysl použít useMemo?
- [x] K memoizaci drahého výpočtu nebo hodnoty, která se nemá přepočítávat při každém renderu bez změny závislostí.
- [ ] K nahrazení useEffect pro side efekty.
- [ ] K přímé změně DOM uzlů.
- [ ] K odeslání HTTP requestu při mountu.

### K čemu slouží useCallback?
- [x] K memoizaci reference na funkci mezi rendery, pokud se nezmění její závislosti.
- [ ] K asynchronnímu čekání na dokončení renderu.
- [ ] K uchování mutable hodnoty bez renderu.
- [ ] K definici error boundary.

### Kdy je vhodné použít useRef?
- [x] Pro přístup k DOM elementu nebo uchování mutable hodnoty, která nemá vyvolat render.
- [ ] Pro uložení globálního sdíleného stavu celé aplikace.
- [ ] Pro spuštění side efektu po každém renderu.
- [ ] Pro nahrazení props mezi rodičem a potomkem.

### Co je controlled component ve formuláři?
- [x] Input, jehož hodnota je řízena React stavem a mění se přes onChange.
- [ ] Input, který nelze nikdy upravit uživatelem.
- [ ] Input, který používá výhradně useRef místo state.
- [ ] Input, který je renderován pouze na serveru.

### Co znamená lifting state up?
- [x] Přesunutí sdíleného stavu do nejbližšího společného rodiče komponent.
- [ ] Uložení lokálního stavu do localStorage.
- [ ] Změnu useState na useRef kvůli výkonu.
- [ ] Přesunutí komponenty z klientu na server.

### Kdy je vhodné použít React Context?
- [x] K předávání hodnot napříč více úrovněmi komponent bez opakovaného prop drillingu.
- [ ] K nahrazení všech lokálních stavů v aplikaci.
- [ ] K přímé manipulaci s DOM uzly.
- [ ] Pouze k ukládání formulářových inputů.

### Co dělá React.memo?
- [x] Brání zbytečnému rerenderu komponenty, pokud se její props nezměnily podle porovnání.
- [ ] Memoizuje výsledek useEffect.
- [ ] Automaticky cachuje všechny API requesty.
- [ ] Převádí class komponentu na function komponentu.

### Proč bývá odvozování stavu z props problematické?
- [x] Může vést k duplicitnímu zdroji pravdy a k nekonzistentnímu stavu.
- [ ] Protože React props neumí předat do child komponent.
- [ ] Protože props nelze číst uvnitř komponenty.
- [ ] Protože odvozený stav je vždy rychlejší než props.

### Kdy je lepší použít funkční update setState(prev => ...)?
- [x] Když nová hodnota závisí na předchozí hodnotě stavu.
- [ ] Když chceme změnit props rodičovské komponenty.
- [ ] Když používáme uncontrolled input.
- [ ] Pouze při server-side renderingu.

### Co je custom hook v Reactu?
- [x] Vlastní funkce využívající jiné hooky pro znovupoužitelnou stavovou nebo side-effect logiku.
- [ ] Speciální class komponenta pro globální stav.
- [ ] Hook, který lze použít pouze v produkci.
- [ ] Nástroj pro definici CSS stylů.

### Proč je důležitý cleanup v useEffect?
- [x] Aby bylo možné odregistrovat listenery, zrušit timeouty nebo abortnout requesty při změně závislostí či unmountu.
- [ ] Aby React mohl přeskočit další render.
- [ ] Aby se props automaticky serializovaly.
- [ ] Aby se useEffect spouštěl synchronně během renderu.

### Co v React StrictMode typicky uvidíš v developmentu?
- [x] Některé lifecycle a efekty mohou být záměrně volány vícekrát pro odhalení nečisté logiky.
- [ ] Produkční build je automaticky dvakrát rychlejší.
- [ ] React zakáže useEffect a useMemo.
- [ ] Každá komponenta se musí psát jako class.

### Co umí error boundary zachytit?
- [x] Chyby při renderu, v lifecycle metodách a v konstruktorech podstromu komponent.
- [ ] Chyby v asynchronních requestech bez dalšího ošetření.
- [ ] Všechny chyby v event handlerech automaticky.
- [ ] Chyby v CSS a layoutu stránky.

### K čemu slouží React Suspense?
- [x] K deklarativnímu zobrazení fallback UI během čekání na lazy načtené části nebo podporované async zdroje.
- [ ] K nahrazení všech error boundaries.
- [ ] K přímému ukládání dat do localStorage.
- [ ] K měření výkonu renderu v DevTools.

### Co je stale closure problém?
- [x] Callback nebo efekt pracuje se zastaralou hodnotou proměnných, protože zachytil starší render.
- [ ] Hook je zavolán mimo React komponentu.
- [ ] State se zapisuje přímo do DOM.
- [ ] Props se mění příliš rychle na serveru.

### Co způsobí změna key na stejné komponentě?
- [x] React komponentu remountne a její lokální stav se vytvoří znovu.
- [ ] React zachová stav i DOM bez změn.
- [ ] React změní pouze CSS třídy komponenty.
- [ ] Změna key nemá žádný efekt.

### Jak správně aktualizovat pole ve state?
- [x] Immutabilně, tedy vytvořením nového pole například pomocí map, filter nebo spread operátoru.
- [ ] Přímou mutací původního pole a bez volání setteru.
- [ ] Pouze přes useRef, aby se předešlo renderu.
- [ ] Vždy přes JSON.stringify.

### Kdy je vhodné použít useReducer místo useState?
- [x] Když je logika změn stavu složitější nebo se stav skládá z více souvisejících přechodů.
- [ ] Když komponenta vůbec nepotřebuje stav.
- [ ] Pouze pro ukládání DOM referencí.
- [ ] Jen ve class komponentách.

### Jaký je rozdíl mezi state a ref?
- [x] Změna state vyvolá render, zatímco změna ref typicky ne.
- [ ] Ref je jen jiný název pro props.
- [ ] State lze používat pouze ve formulářích.
- [ ] Ref se používá jen pro server rendering.

### Co reprezentuje props.children?
- [x] Obsah vložený mezi otevírací a zavírací tag komponenty.
- [ ] Automaticky vygenerovaný stav child komponent.
- [ ] Interní seznam všech hooků v komponentě.
- [ ] Pouze textový obsah bez JSX.

### K čemu slouží React Portal?
- [x] K renderování části UI do jiného DOM uzlu mimo aktuální hierarchii rodičovské komponenty.
- [ ] K vytváření globálního state store.
- [ ] K dynamickému načítání CSS modulů.
- [ ] K serializaci props na serveru.

### Co je častý problém indexu jako key v dynamickém seznamu?
- [x] Při přeuspořádání položek může dojít k chybnému přiřazení stavu nebo DOM prvků.
- [ ] React pak neumí seznam vůbec vyrenderovat.
- [ ] Index jako key vždy zvyšuje bezpečnost komponenty.
- [ ] Index jako key je povinný pro použití useMemo.

### Proč je důležité mít správně dependency pole u useEffect?
- [x] Aby efekt reagoval na relevantní změny a nepracoval se zastaralými hodnotami.
- [ ] Aby bylo možné hook volat uvnitř podmínek.
- [ ] Aby React přeskočil všechny další rendery.
- [ ] Dependency pole slouží pouze pro typování v TypeScriptu.

### Kdy dává smysl uncontrolled input?
- [x] Když nechceme hodnotu průběžně držet ve state a stačí nám ji načíst například přes ref při odeslání formuláře.
- [ ] Když chceme validovat každé stisknutí klávesy přes React state.
- [ ] Když potřebujeme sdílet input mezi více stránkami.
- [ ] Pouze pro server components.

### Co je startTransition v Reactu?
- [x] API pro označení méně urgentních updateů, které mohou být odloženy ve prospěch responzivního UI.
- [ ] Hook pro přímou změnu URL adresy.
- [ ] Mechanismus pro synchronní render bez možnosti přerušení.
- [ ] Náhrada za useEffect při fetchování dat.

### K čemu slouží useDeferredValue?
- [x] K odložení propagace rychle se měnící hodnoty do nákladnější části UI.
- [ ] K trvalému uložení hodnoty do localStorage.
- [ ] K zabránění renderu rodičovské komponenty.
- [ ] K definici lazy-loaded komponenty.

### Co je hydration mismatch?
- [x] Situace, kdy HTML vygenerované serverem neodpovídá tomu, co React očekává při hydrataci na klientu.
- [ ] Stav, kdy server vrátí více CSS souborů než klient.
- [ ] Situace, kdy useState vrátí undefined.
- [ ] Chyba vznikající pouze při použití Reduxu.

### Co je synthetic event v Reactu?
- [x] Wrapper nad nativními browser eventy poskytující konzistentní API napříč prohlížeči.
- [ ] Událost, která funguje pouze na serveru.
- [ ] Event vytvořený jen pro testy v Jestu.
- [ ] DOM node uložený v useRef.

### Co znamená colocate state?
- [x] Držet stav co nejblíže místu, kde je skutečně používán.
- [ ] Přesunout všechen stav do globálního contextu.
- [ ] Ukládat stav pouze do URL parametrů.
- [ ] Používat vždy jen useReducer.

### Jak React zachovává stav komponenty mezi rendery?
- [x] Podle pozice komponenty ve stromu a její identity včetně key.
- [ ] Podle názvu proměnných uvnitř funkce.
- [ ] Pouze podle pořadí importů v souboru.
- [ ] Jen pokud komponenta používá useMemo.

### Kdy použít useLayoutEffect místo useEffect?
- [x] Když potřebujeme číst nebo upravit layout synchronně po zápisu do DOM a před vykreslením do obrazovky.
- [ ] Když chceme odložit neurgentní update.
- [ ] Když komponenta vůbec nepracuje s DOM.
- [ ] Pouze při server-side renderingu.

### Co přinesl automatic batching v novějších verzích Reactu?
- [x] Více state updateů se může sloučit do menšího počtu renderů i mimo klasické event handlery.
- [ ] Každý state update vždy způsobí dva rendery navíc.
- [ ] React vypne asynchronní event handlery.
- [ ] Batching funguje jen v class komponentách.

### Jaký je doporučený způsob zrušení fetch requestu v effectu?
- [x] Použít AbortController a cleanup funkci efektu.
- [ ] Použít setTimeout bez cleanupu.
- [ ] Uložit promise do state a ignorovat ji.
- [ ] Spoléhat na to, že React request zruší automaticky.

### Jaká je nevýhoda nadměrného používání Contextu?
- [x] Může vést k nechtěným rerenderům větší části stromu a ke zhoršení čitelnosti architektury.
- [ ] Context nelze používat s function komponentami.
- [ ] Context funguje pouze v produkčním buildu.
- [ ] Context je vhodný jen pro práci s formuláři.

### K čemu slouží React.lazy?
- [x] K lazy načítání komponent přes dynamický import.
- [ ] K memoizaci výsledku renderu celé aplikace.
- [ ] K nahrazení key v seznamu.
- [ ] K přímému spuštění async effectu během renderu.

### Jak reaguje reconciliation na stejný typ komponenty se stejnou key?
- [x] React se pokusí zachovat instanci komponenty i její stav a aktualizovat jen potřebné části.
- [ ] React komponentu vždy remountne.
- [ ] React ignoruje nové props.
- [ ] React přeskočí render child komponent navždy.

### Jaký je přínos render props oproti hardcoded logice v komponentě?
- [x] Umožňují znovupoužít logiku a nechat volajícího rozhodnout, jak se výsledek vyrenderuje.
- [ ] Jsou rychlejší než všechny hooks ve všech případech.
- [ ] Nahrazují potřebu props.children.
- [ ] Fungují pouze v class komponentách.

### Jak spravovat více inputů v controlled formuláři efektivně?
- [x] Držet hodnoty ve state a aktualizovat je podle name nebo specifických handlerů.
- [ ] Každý input renderovat v samostatné aplikaci.
- [ ] Ukládat změny pouze do useRef bez event handleru.
- [ ] Přesunout celou validaci do CSS.

### Kdy může useMemo zbytečně škodit?
- [x] Když memoizujeme levné výpočty bez reálného dopadu a zvyšujeme tak složitost kódu.
- [ ] Když potřebujeme uložit číslo do state.
- [ ] Když voláme useMemo bez dependency pole.
- [ ] Když renderujeme jen jednu komponentu.

### Proč může inline objekt nebo funkce v props způsobovat zbytečné rerendery?
- [x] Protože při každém renderu vzniká nová reference a shallow compare ji vyhodnotí jako změnu.
- [ ] Protože React neumí serializovat objekty.
- [ ] Protože props musí být pouze stringy.
- [ ] Protože useState nepracuje s referenčními typy.

### Jak se chová Context Provider při změně value objektu?
- [x] Konzumenti contextu se mohou rerenderovat, pokud se změní identita předané value.
- [ ] React context změny value nikdy nepropaguje.
- [ ] Změna value přepíše lokální state všech komponent.
- [ ] Provider lze aktualizovat pouze při mountu.

### Proč nejsou side efekty vhodné přímo uvnitř render funkce?
- [x] Render má být čistý a opakovatelný; side efekty v něm vedou k nekonzistentnímu chování.
- [ ] Protože render funkce běží jen jednou při startu aplikace.
- [ ] Protože side efekty jsou povoleny pouze v class komponentách.
- [ ] Protože React neumí volat fetch z JavaScriptu.

### Co je optimistic UI update?
- [x] Dočasné promítnutí očekávaného výsledku do UI ještě před potvrzením serverem.
- [ ] Vykreslení dat až po kompletním dokončení všech requestů.
- [ ] Uložení celého stavu do DOM atributů.
- [ ] Strategie pro vypnutí loading stavů.

### Jaký je rozdíl mezi props a state?
- [x] Props přichází zvenčí od rodiče, zatímco state je interně spravovaný stav komponenty.
- [ ] Props i state se mění pouze přes DOM API.
- [ ] State je immutable, props mutable.
- [ ] Props lze používat jen ve class komponentách.

### Co je hlavní výhoda composition přes children nebo props oproti hluboké dědičnosti?
- [x] Lepší skládání zodpovědností a flexibilnější znovupoužití UI i logiky.
- [ ] Nižší spotřeba paměti v browseru za všech okolností.
- [ ] Automatické řešení asynchronních requestů.
- [ ] Povinnost používat méně komponent.

### Jaké pravidlo platí pro volání hooků?
- [x] Hooky se mají volat vždy na top levelu React funkce nebo custom hooku, ne podmíněně uvnitř větví a cyklů.
- [ ] Hooky lze volat pouze uvnitř useEffect.
- [ ] Hooky musí být vždy obalené v try/catch.
- [ ] Hooky lze používat jen ve třech importovaných souborech.

## Vue.js

### Co je hlavní přínos Vue reaktivity?
- [x] Automaticky sleduje závislosti a přerenderuje pouze části UI závislé na změněných datech.
- [ ] Umožňuje psát komponenty bez JavaScriptu.
- [ ] Nahrazuje potřebu props a emits.
- [ ] Funguje pouze při server-side renderingu.

### K čemu slouží Composition API ve Vue?
- [x] K organizaci znovupoužitelné logiky podle zodpovědností pomocí `setup()`, composables a reaktivních primitiv.
- [ ] K nahrazení šablon čistým CSS.
- [ ] K automatickému generování routeru.
- [ ] Pouze k definici globálního store.

### Jaký je rozdíl mezi ref a reactive?
- [x] `ref` obaluje typicky jednu hodnotu do objektu s `.value`, zatímco `reactive` vytváří reaktivní proxy pro objekt.
- [ ] `ref` funguje jen pro DOM uzly a `reactive` jen pro pole.
- [ ] `reactive` je immutable a `ref` mutable.
- [ ] Mezi nimi není žádný rozdíl.

### Kdy je vhodné použít computed místo method?
- [x] Když chceme odvozenou hodnotu s cachováním podle reaktivních závislostí.
- [ ] Když chceme spouštět side efekty po každém renderu.
- [ ] Když potřebujeme emitnout event na rodiče.
- [ ] Když chceme mutovat props.

### K čemu slouží watch?
- [x] K reakci na změnu konkrétní reaktivní hodnoty nebo výrazu, typicky pro side efekty.
- [ ] K deklaraci slotů v child komponentě.
- [ ] K nahrazení `v-if`.
- [ ] K přímé změně template DOM bez renderu.

### Jak se liší watchEffect od watch?
- [x] `watchEffect` automaticky sleduje použité závislosti uvnitř callbacku, zatímco `watch` má zdroj sledování definovaný explicitně.
- [ ] `watchEffect` funguje jen v Options API.
- [ ] `watch` neumí cleanup a `watchEffect` ano.
- [ ] `watchEffect` je určený pouze pro SSR.

### Co znamená, že props jsou ve Vue one-way data flow?
- [x] Parent předává hodnoty child komponentě, ale child je nemá přímo mutovat.
- [ ] Child může props libovolně měnit a parent to nevidí.
- [ ] Props mohou téct pouze mezi sibling komponentami.
- [ ] Props lze použít jen pro boolean hodnoty.

### Jak child komponenta standardně komunikuje změnu směrem k rodiči?
- [x] Přes emit události, kterou parent zachytí a zareaguje na ni.
- [ ] Přímou mutací parent state bez eventu.
- [ ] Přepsáním vlastních props.
- [ ] Pouze přes globální store.

### K čemu slouží `v-model`?
- [x] K obousměrnému navázání hodnoty a změnové události mezi UI a stavem komponenty.
- [ ] K definici slotů pro child komponentu.
- [ ] K vypnutí reaktivity pro daný input.
- [ ] K memoizaci výpočtů v template.

### Jaký je rozdíl mezi `v-if` a `v-show`?
- [x] `v-if` element přidává nebo odebírá z DOM, zatímco `v-show` typicky jen přepíná CSS `display`.
- [ ] `v-show` odebírá element z DOM a `v-if` ne.
- [ ] Obě direktivy dělají vždy totéž.
- [ ] `v-if` lze použít jen na formulářové prvky.

### K čemu slouží sloty?
- [x] K předávání renderovatelného obsahu do komponenty zvenčí při zachování její obalové struktury.
- [ ] K ukládání lokálního stavu mezi routami.
- [ ] K nahrazení props v každé komponentě.
- [ ] K definici HTTP route handlerů.

### Co jsou scoped slots?
- [x] Sloty, kde child poskytuje parentu data pro vykreslení slot obsahu.
- [ ] Sloty, které fungují jen ve scoped CSS.
- [ ] Sloty dostupné pouze v produkci.
- [ ] Přímá náhrada za provide/inject.

### Kdy použít provide/inject?
- [x] K předání hodnot napříč stromem komponent bez prop drillingu, typicky pro technický kontext nebo plugin API.
- [ ] K ukládání každého formulářového inputu v aplikaci.
- [ ] K nahrazení routeru.
- [ ] Pouze pro asynchronní data z backendu.

### Co je composable ve Vue?
- [x] Funkce zapouzdřující znovupoužitelnou logiku nad Composition API.
- [ ] Speciální template direktiva pro podmíněný render.
- [ ] Náhrada za CSS modul.
- [ ] Povinná struktura každé stránky ve Vue Routeru.

### Co dělá `onMounted`?
- [x] Registruje callback, který se spustí po mountu komponenty do DOM.
- [ ] Spouští cleanup po unmountu.
- [ ] Přidává hodnotu do computed cache.
- [ ] Funguje pouze na serveru.

### K čemu slouží `onUnmounted`?
- [x] K vyčištění listenerů, timerů nebo jiných side efektů při odpojení komponenty.
- [ ] K inicializaci props před prvním renderem.
- [ ] K definici emit událostí.
- [ ] K připojení SSR middleware.

### Jaký je smysl key při renderování seznamu ve Vue?
- [x] Pomáhá frameworku správně identifikovat prvky při updatech seznamu a zachovat správný stav.
- [ ] Umožňuje používat `v-if` uvnitř `v-for`.
- [ ] Nahrazuje potřebu `:class`.
- [ ] Key je nutný jen pro server rendering.

### Proč je problém použít index jako key v dynamickém seznamu?
- [x] Při změně pořadí může dojít k chybnému reuse DOM nebo lokálního stavu položek.
- [ ] Vue pak seznam nevyrenderuje vůbec.
- [ ] Index key automaticky vypíná reaktivitu.
- [ ] Index key lze použít jen u slotů.

### Co je computed setter?
- [x] Možnost definovat nejen getter, ale i logiku zápisu do computed hodnoty.
- [ ] Speciální lifecycle hook.
- [ ] Povinný parametr `watchEffect`.
- [ ] Mechanismus pro SSR hydrataci.

### Proč není vhodné dělat side efekty přímo v computed?
- [x] Computed má být deterministická odvozená hodnota, ne místo pro side efekty.
- [ ] Protože computed se vyhodnotí vždy jen jednou.
- [ ] Protože computed neumí pracovat s props.
- [ ] Protože computed funguje jen v class komponentách.

### Co dělá `nextTick`?
- [x] Počká na flush pending DOM updateů, aby bylo možné pracovat s aktuálně vyrenderovaným DOM.
- [ ] Přesune komponentu do další routy.
- [ ] Vynutí reload celé aplikace.
- [ ] Nahrazuje `setTimeout`.

### Jaký je účel `defineProps` v `<script setup>`?
- [x] Deklaruje props přijímané komponentou v syntaxi `<script setup>`.
- [ ] Slouží k vytvoření globálního store.
- [ ] Používá se jen v Options API.
- [ ] Přidává scoped CSS do komponenty.

### K čemu slouží `defineEmits`?
- [x] K deklaraci a typování událostí, které komponenta emituje.
- [ ] K přímé změně props rodičovské komponenty.
- [ ] K vytvoření watcheru na route params.
- [ ] K vypnutí reaktivity v child komponentě.

### Co umožňuje `<script setup>`?
- [x] Stručnější zápis Composition API s menším boilerplate a přímou dostupností deklarací v template.
- [ ] Renderování bez template a bez JSX.
- [ ] Automatické generování unit testů.
- [ ] Použití pouze na serveru.

### Kdy použít `shallowRef`?
- [x] Když chceme sledovat změnu reference, ale nechceme hlubokou reaktivitu vnořeného objektu.
- [ ] Když potřebujeme computed s cache.
- [ ] Když chceme přistupovat k DOM elementu v template.
- [ ] Když potřebujeme deep watcher na každý vnořený klíč.

### K čemu slouží `toRefs`?
- [x] K převodu reaktivního objektu na jednotlivé refy při zachování reaktivity.
- [ ] K odstranění všech watcherů z komponenty.
- [ ] K převodu props na immutable objekt.
- [ ] K serializaci router state.

### Co je častá chyba při destrukturování reactive objektu?
- [x] Ztráta reaktivity, pokud hodnoty nevytáhneme přes `toRefs` nebo jiný vhodný mechanismus.
- [ ] Okamžité spuštění všech watcherů dvakrát.
- [ ] Změna všech property na readonly.
- [ ] Není to chyba, reaktivita se vždy zachová.

### Jak Vue obvykle řeší formulářovou validaci?
- [x] Kombinací reaktivního stavu, computed/watcher logiky a případně validační knihovny.
- [ ] Pouze přes HTML atribut `required`, nic jiného není možné.
- [ ] Validace je zabudovaná do `v-model` automaticky pro všechny scénáře.
- [ ] Jen přes provide/inject.

### Co je hlavní přínos Vue Routeru?
- [x] Mapuje URL na komponenty a poskytuje mechanismy jako nested routes, guards nebo route params.
- [ ] Nahrazuje potřebu props a emitů.
- [ ] Ukládá data do localStorage.
- [ ] Slouží výhradně pro stylování stránky.

### K čemu slouží navigation guard?
- [x] K řízení přístupu nebo provedení logiky před nebo během změny routy.
- [ ] K memoizaci výpočtů v komponentě.
- [ ] K přímé změně DOM v child komponentě.
- [ ] K přidání CSS animace na přechod.

### Co je ve Vue teleportační komponenta `Teleport`?
- [x] Umožňuje renderovat část obsahu do jiného místa v DOM mimo aktuální strom komponent.
- [ ] Přesouvá aplikaci mezi klientem a serverem.
- [ ] Nahrazuje sloty i props.
- [ ] Slouží k definici globálního store.

### K čemu slouží `Suspense` ve Vue?
- [x] K práci s async komponentami nebo setup logikou a k zobrazení fallback obsahu během čekání.
- [ ] K ukládání výsledků testů do store.
- [ ] K vypnutí SSR hydratace.
- [ ] K měření FPS v aplikaci.

### Co je async component?
- [x] Komponenta načítaná dynamicky až ve chvíli, kdy je potřeba.
- [ ] Komponenta, která může mít pouze async methods.
- [ ] Komponenta bez template.
- [ ] Komponenta určená jen pro Node.js backend.

### Proč je důležité neporušovat unidirectional data flow?
- [x] Zjednodušuje to debugování a snižuje riziko skrytých vedlejších efektů mezi parent a child komponentami.
- [ ] Protože Vue jinak vypne reaktivitu celé aplikace.
- [ ] Protože props lze používat jen jedním směrem kvůli TypeScriptu.
- [ ] Protože emit události fungují pouze v SSR.

### Co je hlavní role Pinie ve Vue ekosystému?
- [x] Poskytovat jednoduchý a typově přívětivý store pro sdílený stav aplikace.
- [ ] Nahradit Vue Router.
- [ ] Převádět templates do CSS modulů.
- [ ] Umožnit render bez DOM.

### Co znamená lazy loading rout ve Vue Routeru?
- [x] Že komponenty rout se načítají dynamicky až při vstupu na danou route.
- [ ] Že router čeká na idle CPU před každou navigací.
- [ ] Že všechny routy jsou renderovány jen na serveru.
- [ ] Že route params jsou načítány z localStorage.

### Jaký je rozdíl mezi local state a storem?
- [x] Local state je omezený na konkrétní komponentu, zatímco store slouží ke sdílení stavu napříč aplikací.
- [ ] Store je pouze jiný název pro props.
- [ ] Local state nelze ve Vue používat.
- [ ] Store funguje jen v Options API.

### Co typicky dělá `computed` lépe než `watch`?
- [x] Reprezentuje odvozenou hodnotu bez side efektu a s interním cachováním.
- [ ] Umožňuje emitovat event do parent komponenty.
- [ ] Nahrazuje potřebu route guards.
- [ ] Slouží k rušení pending requestů.

### Jaký je rozdíl mezi `v-bind` a `v-on`?
- [x] `v-bind` předává hodnoty do atributů nebo props, zatímco `v-on` připojuje event listenery.
- [ ] `v-bind` je pro eventy a `v-on` pro props.
- [ ] Obojí slouží pouze pro CSS classy.
- [ ] Obě direktivy fungují pouze v Options API.

### Co je výhodou scoped CSS ve Vue single-file komponentách?
- [x] Omezí dopad stylů na konkrétní komponentu bez nutnosti ručně namespacovat všechny selektory.
- [ ] Zajišťuje plnou izolaci bez jakýchkoli výjimek i pro globální styly.
- [ ] Nahrazuje potřebu CSS proměnných.
- [ ] Funguje pouze s `v-show`.

### Co je hlavní účel `emit` validace nebo typování?
- [x] Dát jasný kontrakt, jaké události může komponenta vysílat a s jakým payloadem.
- [ ] Umožnit child komponentě přímo měnit route konfiguraci.
- [ ] Zakázat parent komponentě reagovat na eventy.
- [ ] Vypnout reaktivitu props.

### K čemu slouží `keep-alive`?
- [x] K zachování instance komponenty mezi přepínáním, typicky u dynamických komponent nebo rout.
- [ ] K trvalému uložení dat do browser storage.
- [ ] K vynucení rerenderu po každém kliknutí.
- [ ] K vypnutí transitions.

### Co je hlavní výhoda Single File Components?
- [x] Umožňují držet template, logiku a styl komponenty pohromadě v jasně strukturovaném souboru.
- [ ] Jsou povinné pro každou Vue aplikaci.
- [ ] Lze je používat jen bez bundleru.
- [ ] Nahrazují potřebu routeru.

### Jaký je smysl performance optimalizace přes rozdělení komponent?
- [x] Zmenšuje množství reaktivních závislostí na jednom místě a omezuje rozsah updateů.
- [ ] Vue pak nemusí používat Virtual DOM vůbec.
- [ ] Umožní přeskakovat všechny guardy routeru.
- [ ] Zaručí nulový počet rerenderů.

### Co je hydration mismatch ve Vue SSR?
- [x] Nesoulad mezi serverem vyrenderovaným HTML a tím, co klient očekává při hydrataci.
- [ ] Vypnutí routeru při přechodu na klient.
- [ ] Stav, kdy Pinia neobsahuje žádný store.
- [ ] Chyba syntaxe v `v-bind`.

### K čemu slouží `defineExpose`?
- [x] K explicitnímu zpřístupnění vybraných hodnot nebo metod rodiči přes template ref.
- [ ] K exportu všech props do global store.
- [ ] K definici route guards v komponentě.
- [ ] K přepnutí z Composition API na Options API.

### Proč může deep watch bolet výkon?
- [x] Protože sleduje změny vnořených struktur a může být drahý u velkých objektů.
- [ ] Protože Vue deep watch neumí a vždy spadne.
- [ ] Protože deep watch funguje jen pro primitivní typy.
- [ ] Protože watcher automaticky vypne computed.

### Jaký je vhodný přístup k fetchování dat v komponentě?
- [x] Spouštět ho v odpovídajícím lifecycle nebo composable a řešit loading, error i cleanup scénáře.
- [ ] Volat fetch přímo v template výrazu.
- [ ] Ukládat response vždy do props.
- [ ] Používat jen `watchEffect`, i když to komplikuje kontrolu nad závislostmi.

### Kdy je vhodné použít `readonly` nad reaktivní hodnotou?
- [x] Když chceme předat stav dál jen pro čtení a zabránit nechtěným mutacím z jiných míst.
- [ ] Když chceme hodnotu smazat z reaktivního systému.
- [ ] Když potřebujeme deep watcher.
- [ ] Jen při použití Vue Routeru.

### Co je hlavní role template compileru ve Vue?
- [x] Převádí template na render funkce, které framework vykonává.
- [ ] Ukládá stav komponent do JSON souborů.
- [ ] Vytváří automaticky unit testy.
- [ ] Obsluhuje HTTP requesty na backend.

## Node.js

### Co je hlavní charakteristika Node.js runtime?
- [x] JavaScript runtime nad V8 určený primárně pro server-side a CLI aplikace s event-driven I/O modelem.
- [ ] Framework pro tvorbu CSS layoutů.
- [ ] Databáze orientovaná na dokumenty.
- [ ] Nástroj pouze pro build frontend assetů.

### Co je event loop v Node.js?
- [x] Mechanismus, který zpracovává callbacky a asynchronní úlohy v jednotlivých fázích běhu.
- [ ] Fronta pouze pro HTTP requesty.
- [ ] Nástroj pro serializaci JSON.
- [ ] API pro vytváření worker threadů.

### Proč je Node.js vhodný pro I/O bound workloady?
- [x] Protože neblokující I/O umožňuje obsluhovat více čekajících operací bez blokování hlavního vlákna.
- [ ] Protože každá operace běží automaticky na vlastním procesoru.
- [ ] Protože JavaScript kód je vždy rychlejší než nativní kód.
- [ ] Protože Node nepoužívá síťové sockety.

### K čemu v Node.js slouží libuv?
- [x] Poskytuje event loop, abstrahuje asynchronní I/O a thread pool pro některé operace.
- [ ] Je to nástroj pro transpile TypeScriptu.
- [ ] Slouží k rendrování HTML šablon.
- [ ] Je to package manager pro npm balíčky.

### Co je hlavní rozdíl mezi CommonJS a ESM?
- [x] CommonJS používá `require/module.exports`, zatímco ESM používá `import/export` a má odlišný modulový systém i načítání.
- [ ] CommonJS funguje jen v browseru a ESM jen na serveru.
- [ ] ESM neumí pracovat s async importy.
- [ ] CommonJS podporuje jen CSS soubory.

### Co znamená, že Node běží nad single-threaded JavaScript execution modelem?
- [x] JavaScript kód běží v jednom hlavním vlákně, i když některé I/O nebo interní operace mohou využít thread pool či OS.
- [ ] Node nikdy nepoužívá žádné další thready.
- [ ] Každý request dostane vlastní JavaScript thread automaticky.
- [ ] Node umí vykonávat jen synchronní funkce.

### Kdy může synchronní API jako `fs.readFileSync` bolet výkon serveru?
- [x] Když blokuje event loop a brání obsluze dalších requestů během čtení.
- [ ] Nikdy, synchronní API je vždy rychlejší.
- [ ] Jen když se používá v testech.
- [ ] Pouze na Windows.

### K čemu slouží streamy v Node.js?
- [x] K postupnému zpracování dat po částech bez nutnosti držet vše v paměti najednou.
- [ ] K ukládání environment variables.
- [ ] K definici HTTP route handlerů.
- [ ] K náhradě Promise API.

### Co je backpressure u streamů?
- [x] Mechanismus řízení toku dat, aby producer negeneroval data rychleji, než je consumer dokáže zpracovat.
- [ ] Automatické opakování requestu při chybě.
- [ ] Název pro memory leak v Bufferech.
- [ ] Vlastnost dostupná jen u child processů.

### K čemu slouží Buffer v Node.js?
- [x] K práci s binárními daty mimo běžné JavaScript stringy a pole.
- [ ] K ukládání React komponent do cache.
- [ ] K řízení event loopu.
- [ ] K definici TypeScript generics.

### Jaký je rozdíl mezi `process.nextTick()` a `setTimeout(..., 0)`?
- [x] `process.nextTick()` se vykoná dříve, ještě před další fází event loopu, zatímco timeout čeká na timers phase.
- [ ] Obě API jsou v Node zcela identická.
- [ ] `setTimeout(..., 0)` vždy běží před microtasky.
- [ ] `process.nextTick()` slouží jen pro child process.

### Co je Promise microtask queue?
- [x] Fronta callbacků z Promise reakcí, která se zpracovává před přechodem do dalších fází event loopu.
- [ ] Fronta pouze pro HTTP odpovědi.
- [ ] Úložiště pro environment variables.
- [ ] Mechanismus dostupný jen v browseru.

### Kdy má smysl použít worker_threads?
- [x] Pro CPU náročnou práci, kterou nechceme blokovat v hlavním JavaScript vlákně.
- [ ] Pro běžné čtení souboru přes `fs.promises`.
- [ ] Pro nahrazení všech Promise chainů.
- [ ] Jen pro obsluhu statických assetů.

### Kdy je vhodnější child_process než worker thread?
- [x] Když potřebujeme oddělený proces, jiný runtime nebo spouštět externí binárky.
- [ ] Když chceme sdílet JavaScript heap mezi thready.
- [ ] Při jednoduchém update objektu ve state.
- [ ] Jen při použití Expressu.

### Co je cluster v Node.js?
- [x] Mechanismus pro spuštění více procesů využívajících více CPU jader nad stejným serverovým workloadem.
- [ ] Nativní databázová replikační vrstva.
- [ ] Název pro skupinu Promise callbacků.
- [ ] Povinná součást každé Node aplikace.

### Co je hlavní výhoda `fs.promises` API?
- [x] Umožňuje pohodlně pracovat s file system operacemi přes Promise a async/await.
- [ ] Všechny operace jsou díky tomu synchronní.
- [ ] Funguje jen ve worker threadu.
- [ ] Nahrazuje potřebu importů.

### Jak správně zachytit chybu v async funkci?
- [x] Použít `try/catch` kolem `await` nebo vrácenou Promise korektně ošetřit.
- [ ] Spoléhat, že Node všechny chyby vypíše a pokračuje bezpečně dál.
- [ ] Použít pouze `console.log` bez další logiky.
- [ ] Zachytit chybu jen na úrovni package.json.

### Co je unhandled promise rejection?
- [x] Promise, která je odmítnutá a nemá včas připojený handler pro chybu.
- [ ] Promise, která je pending déle než 5 sekund.
- [ ] Každý `throw` uvnitř sync funkce.
- [ ] Situace, kdy `await` vrátí `undefined`.

### K čemu slouží middleware v HTTP frameworku jako Express?
- [x] K řetězení zpracování requestu a response, například pro auth, logování nebo parsování dat.
- [ ] K nativnímu ukládání dat do MongoDB.
- [ ] K překladu TypeScriptu na JavaScript.
- [ ] K paralelnímu běhu event loopu.

### Co je typický problém memory leaků v Node.js?
- [x] Dlouho žijící reference, které brání garbage collectoru uvolnit už nepoužívaná data.
- [ ] Každý `await` automaticky vyvolá memory leak.
- [ ] Streamy nikdy nealokují paměť.
- [ ] Memory leak vzniká jen ve frontendu.

### Jaký je rozdíl mezi `spawn` a `exec`?
- [x] `spawn` je vhodnější pro streamování výstupu, zatímco `exec` buffruje celý output a vrátí ho najednou.
- [ ] `exec` umí spouštět jen Node soubory a `spawn` jen shell skripty.
- [ ] `spawn` vždy blokuje event loop.
- [ ] Mezi nimi není rozdíl.

### K čemu slouží environment variables v Node aplikaci?
- [x] K oddělení konfigurace od kódu, například pro secrets, URL nebo feature flagy.
- [ ] K ukládání request body během běhu.
- [ ] K nahrazení databáze.
- [ ] K přidání nových dependency bez restartu.

### Proč je vhodné validovat vstup na hraně aplikace?
- [x] Chrání to interní logiku před neplatnými daty a usnadňuje predikovatelné chování API.
- [ ] Protože Node jinak neumí pracovat s JSON.
- [ ] Validace patří pouze do databáze.
- [ ] Jen kvůli tomu, aby byl menší bundle.

### Co je rozdíl mezi `readable`, `writable` a `transform` streamem?
- [x] Readable produkuje data, writable data přijímá a transform dělá obojí s úpravou toku.
- [ ] Všechny tři typy jsou zcela stejné.
- [ ] Transform stream nelze pipelineovat.
- [ ] Writable stream jen čte soubory.

### K čemu slouží `pipeline()` ve stream API?
- [x] K bezpečnému propojení streamů s lepším ošetřením chyb a ukončení.
- [ ] K definici middleware řetězce v Expressu.
- [ ] K vytvoření worker threadu.
- [ ] K serializaci bufferu do JSON.

### Co může způsobit blokování event loopu?
- [x] Dlouhý synchronní CPU výpočet nebo synchronní I/O v request handleru.
- [ ] Použití Promise.all pro více requestů.
- [ ] Běžné použití async/await samo o sobě.
- [ ] Vracení JSON response klientovi.

### K čemu slouží `package.json`?
- [x] Popisuje metadata projektu, dependency, skripty a další nastavení balíčku.
- [ ] Je to interní cache npm registry.
- [ ] Obsahuje jen TypeScript typy.
- [ ] Nahrazuje lockfile.

### Proč je důležitý lockfile (`package-lock.json`, `bun.lock`, `pnpm-lock.yaml`)?
- [x] Fixuje konkrétní verze závislostí pro reprodukovatelné instalace.
- [ ] Automaticky zrychluje runtime aplikace.
- [ ] Nahrazuje testy v CI.
- [ ] Slouží pouze k uložení secrets.

### Co znamená semver zápis `^1.2.3`?
- [x] Umožňuje aktualizace kompatibilních minor a patch verzí v rámci stejné major verze.
- [ ] Fixuje přesně jen verzi `1.2.3`.
- [ ] Povoluje libovolnou další major verzi.
- [ ] Znamená prerelease balíček.

### K čemu slouží `npm scripts`?
- [x] K definici opakovaně použitelných příkazů pro build, testy, start a další úlohy projektu.
- [ ] Jen k instalaci globálních package managerů.
- [ ] Pouze k definici HTTP rout.
- [ ] K vypnutí event loopu v produkci.

### Jaká je role `process.env`?
- [x] Umožňuje číst environment variables dostupné procesu.
- [ ] Obsahuje pouze command line argumenty.
- [ ] Je to globální store pro request data.
- [ ] Slouží výhradně pro debug logy.

### Co dělá `process.argv`?
- [x] Obsahuje argumenty příkazové řádky, se kterými byl proces spuštěn.
- [ ] Vrací seznam všech Promise čekajících v event loopu.
- [ ] Ukládá environment variables.
- [ ] Je to API pro čtení souborů.

### K čemu slouží `__dirname` nebo jeho ekvivalent v ESM?
- [x] K odvození cesty k aktuálnímu souboru nebo jeho adresáři pro práci s file systémem.
- [ ] K získání URL aktuální HTTP requestu.
- [ ] K získání jména package z npm registru.
- [ ] K uložení Buffer instance do globálního scope.

### Co je dobrý důvod používat structured logging?
- [x] Logy se lépe filtrují, agregují a analyzují v observability nástrojích.
- [ ] Protože stringové logy nelze v Node vůbec vypsat.
- [ ] Protože structured logy automaticky řeší všechny chyby.
- [ ] Jen kvůli tomu, aby byl menší memory footprint.

### Co je healthcheck endpoint?
- [x] Jednoduchý endpoint signalizující, zda je služba na základní úrovni dostupná a připravená odpovídat.
- [ ] Endpoint pro kompletní export databáze.
- [ ] Endpoint, který musí vracet celý config aplikace.
- [ ] Nástroj pro instalaci npm balíčků.

### Jaký je rozdíl mezi liveness a readiness checkem?
- [x] Liveness říká, zda proces žije, readiness zda je připraven obsluhovat traffic.
- [ ] Readiness vždy nahrazuje liveness.
- [ ] Liveness je jen pro frontend a readiness jen pro backend.
- [ ] Mezi nimi není žádný rozdíl.

### K čemu slouží `AbortController` při práci s fetch?
- [x] Umožňuje request zrušit, například při timeoutu nebo zrušení operace.
- [ ] Slouží k automatickému retry requestu.
- [ ] Přidává response do cache.
- [ ] Nahrazuje `Promise.race`.

### Co je hlavní riziko callback hell?
- [x] Horší čitelnost, testovatelnost a práce s chybami při hlubokém zanoření callbacků.
- [ ] Callbacky jsou vždy pomalejší než Promise.
- [ ] Callbacky nelze používat s file systémem.
- [ ] Callback hell se týká jen CSS build pipeline.

### Kdy dává smysl použít `Promise.all`?
- [x] Když chceme spustit více nezávislých asynchronních operací paralelně a čekat na všechny.
- [ ] Když musí operace běžet přísně sekvenčně.
- [ ] Když chceme ignorovat chyby všech Promise.
- [ ] Jen pro jeden jediný request.

### Co je vhodný přístup k timeoutům síťových volání?
- [x] Mít explicitní timeout nebo abort strategii a neponechávat requesty viset donekonečna.
- [ ] Spoléhat, že síťové requesty se vždy vrátí rychle.
- [ ] Timeouty řešit jen na frontendu.
- [ ] Vypnout retry i logování.

### K čemu slouží HTTP keep-alive?
- [x] Umožňuje znovupoužít TCP spojení pro více requestů a snížit overhead navazování spojení.
- [ ] Zajišťuje automatické šifrování bez TLS.
- [ ] Vypíná potřebu response headerů.
- [ ] Funguje jen v browser fetch, ne na serveru.

### Co je důsledkem chybějícího error handleru na streamu?
- [x] Proces může skončit nebo vznikne neošetřená chyba v toku zpracování dat.
- [ ] Stream automaticky přejde do retry režimu.
- [ ] Stream se změní na synchronous mode.
- [ ] Žádný důsledek, stream chyby ignoruje.

### Proč je důležité graceful shutdown chování serveru?
- [x] Umožňuje dokončit rozpracované requesty, zavřít spojení a uvolnit zdroje při ukončování procesu.
- [ ] Jen kvůli tomu, aby se přepsal package-lock.
- [ ] Protože Node bez něj neumí spustit HTTP server.
- [ ] Je potřeba pouze v testech.

### Co typicky znamená idempotentní HTTP operace?
- [x] Opakované provedení stejného požadavku má stejný efekt na stav systému jako jediné provedení.
- [ ] Request je vždy asynchronní.
- [ ] Request nikdy nevrací chybu.
- [ ] Response musí být prázdná.

### K čemu slouží rate limiting na API serveru?
- [x] Chrání službu před zneužitím, brute-force útoky a přetížením.
- [ ] Zajišťuje renderování šablon na serveru.
- [ ] Nahrazuje autentizaci.
- [ ] Slouží jen ke kompresi response.

### Proč je nebezpečné logovat citlivé hodnoty?
- [x] Mohou uniknout do log managementu nebo být dostupné lidem, kteří k nim nemají mít přístup.
- [ ] Citlivé hodnoty se v logu automaticky zašifrují.
- [ ] Logy se v Node nikdy neukládají.
- [ ] Je to problém jen v browser console.

### Co je hlavní výhoda schema validace requestů?
- [x] Jasný kontrakt vstupů, dřívější odhalení chyb a bezpečnější zpracování dat.
- [ ] Node pak nepotřebuje testy.
- [ ] Schema validace slouží jen pro GraphQL.
- [ ] Validace zrychluje síťovou latenci tím, že zkracuje TCP handshake.

### Kdy je vhodné použít connection pooling k databázi?
- [x] Když nechceme pro každý request vytvářet nové spojení a chceme lépe využívat zdroje.
- [ ] Když chceme vypnout autentizaci k databázi.
- [ ] Jen při použití worker threadů.
- [ ] Pooling je vhodný pouze pro file system.

### Jaký je přínos observability metrik vedle logů?
- [x] Metriky umožňují rychle sledovat trendy, latence, error rate a kapacitu v čase.
- [ ] Metriky plně nahrazují potřebu logování.
- [ ] Metriky jsou určeny pouze pro frontend CSS.
- [ ] Metriky nelze použít v alertingu.

### Co je typický use-case pro `Readable.from()`?
- [x] Vytvoření readable streamu z iterovatelného zdroje nebo kolekce.
- [ ] Převod HTTP serveru na worker thread.
- [ ] Generování TypeScript deklarací.
- [ ] Nahrazení package manageru.

## Angular

### Co je Angular komponenta?
- [x] Základní stavební blok UI definující template, logiku a metadata chování.
- [ ] Speciální služba pro HTTP komunikaci.
- [ ] Náhrada za router konfiguraci.
- [ ] CSS soubor s dekorátorem.

### K čemu slouží dekorátor `@Component`?
- [x] K přidání metadat o template, selectorech a dalších vlastnostech komponenty.
- [ ] K registraci dependency v injector tree.
- [ ] K vytvoření RxJS observable.
- [ ] K označení route guardu.

### Co je dependency injection v Angularu?
- [x] Mechanismus pro poskytování instancí služeb a jejich injektování do tříd bez ručního vytváření.
- [ ] Povinný způsob definice CSS tříd.
- [ ] Runtime validace všech formulářů.
- [ ] Mechanismus pro server-side rendering HTML.

### Co typicky reprezentuje service v Angularu?
- [x] Znovupoužitelnou business nebo integrační logiku oddělenou od komponent.
- [ ] Pouze HTML template bez TypeScriptu.
- [ ] Route definovanou v routeru.
- [ ] Deklaraci modulu aplikace.

### Jaký je přínos standalone komponent v Angularu?
- [x] Umožňují stavět aplikaci bez nutnosti deklarovat vše v NgModule, s explicitnějšími importy.
- [ ] Zakazují používat dependency injection.
- [ ] Fungují jen v testovacím režimu.
- [ ] Nahrazují RxJS observables.

### K čemu slouží `@Input()`?
- [x] K příjmu dat z parent komponenty.
- [ ] K emitování událostí do rodiče.
- [ ] K registraci service v injector tree.
- [ ] K definici route parametru.

### K čemu slouží `@Output()`?
- [x] K vysílání událostí z child komponenty směrem k parentu.
- [ ] K příjmu dat z backend API.
- [ ] K vytvoření formulářového controleru.
- [ ] K deklaraci CSS animace.

### Co je `EventEmitter` v Angularu?
- [x] Objekt běžně používaný s `@Output()` pro emitování událostí z komponenty.
- [ ] Globální store celé aplikace.
- [ ] Náhrada za HTTP client.
- [ ] Mechanismus pro lazy loading rout.

### Jaký je rozdíl mezi template-driven a reactive forms?
- [x] Template-driven forms jsou více deklarativní v template, reactive forms staví formulářový model explicitně v TypeScriptu.
- [ ] Reactive forms fungují jen v SSR.
- [ ] Template-driven forms neumí validaci.
- [ ] Mezi nimi není praktický rozdíl.

### Kdy mají větší smysl reactive forms?
- [x] U složitějších formulářů s dynamičtější validací, kompozicí a lepší testovatelností.
- [ ] Pouze u checkboxů.
- [ ] Když formulář obsahuje jediný input.
- [ ] Jen pokud aplikace nepoužívá router.

### Co je `FormControl`?
- [x] Objekt reprezentující stav a validaci jednoho formulářového pole.
- [ ] Angular komponenta pro render inputu.
- [ ] Route guard pro validaci URL.
- [ ] CSS direktiva pro styl inputu.

### Co je `FormGroup`?
- [x] Kolekce více formulářových controlů seskupených do jednoho formulářového modelu.
- [ ] Seznam služeb registrovaných v provideru.
- [ ] Mechanismus pro lazy loading.
- [ ] Wrapper nad HTTP requestem.

### K čemu slouží validator ve formuláři?
- [x] K ověření, zda vstupní hodnota splňuje požadovaná pravidla.
- [ ] K serializaci formuláře do CSS.
- [ ] K registraci komponenty do modulu.
- [ ] K přepočtu change detection stromu.

### Co je Angular Router?
- [x] Mechanismus mapující URL na komponenty a podporující guards, lazy loading či nested routes.
- [ ] Náhrada za dependency injection.
- [ ] Knihovna pro HTTP requesty.
- [ ] Runtime pro Node.js backend.

### K čemu slouží route guard?
- [x] K rozhodnutí, zda lze aktivovat, opustit nebo načíst route podle definované logiky.
- [ ] K přímému renderování child komponent.
- [ ] K memoizaci change detection.
- [ ] K serializaci formuláře do query stringu.

### Co je lazy loading rout v Angularu?
- [x] Načítání části aplikace nebo feature až při vstupu na příslušnou route.
- [ ] Pomalé přepínání mezi routami při nízkém CPU.
- [ ] Načítání HTML přes iframe.
- [ ] Mechanismus pro vypnutí bundleru.

### K čemu slouží `HttpClient`?
- [x] K odesílání HTTP requestů a práci s jejich odpověďmi přes observables.
- [ ] K renderování template.
- [ ] K vytvoření dependency injector tree.
- [ ] K práci s DOM elementy přes ViewChild.

### Co je HTTP interceptor?
- [x] Vrstva, která může upravovat requesty a response nebo řešit cross-cutting concerns jako auth a logging.
- [ ] Komponenta pro zachytávání kliknutí.
- [ ] Guard, který se spouští pouze na 404 route.
- [ ] RxJS operator pro streamování DOM eventů.

### Proč Angular používá RxJS?
- [x] Pro práci s asynchronními proudy dat, eventy a kompozicí operací nad observables.
- [ ] Jen pro stylování komponent.
- [ ] Protože Promise v Angularu nefungují.
- [ ] Výhradně kvůli DI containeru.

### Co je Observable?
- [x] Reprezentace proudu hodnot v čase, který lze transformovat a odebírat.
- [ ] Jednorázová synchronní hodnota.
- [ ] Dekorátor pro registraci komponent.
- [ ] HTML prvek pro formulář.

### Kdy je potřeba se od observable odhlásit?
- [x] Když subscription může žít déle než komponenta a hrozí memory leak nebo nežádoucí side efekty.
- [ ] Nikdy, Angular vše odhlašuje automaticky.
- [ ] Jen u HTTP requestů, které se ihned dokončí.
- [ ] Pouze u standalone komponent.

### Co dělá `async` pipe?
- [x] Přihlásí se k observable nebo promise v template a při destroy komponenty subscription uklidí.
- [ ] Vynutí synchronní čtení observable.
- [ ] Nahrazuje router outlet.
- [ ] Slouží jen k typování template.

### K čemu slouží operator `map` v RxJS?
- [x] Transformuje emitované hodnoty na nové hodnoty.
- [ ] Zastaví observable stream.
- [ ] Sdílí subscription mezi komponentami.
- [ ] Vytváří dependency injection mapu.

### Co typicky dělá `switchMap`?
- [x] Při nové vstupní hodnotě zruší předchozí vnořený stream a přepne se na nový.
- [ ] Sloučí všechny vnořené streamy paralelně bez rušení.
- [ ] Převede observable na signal.
- [ ] Připojí CSS modul ke komponentě.

### Kdy je vhodnější `mergeMap` než `switchMap`?
- [x] Když chceme ponechat více vnořených asynchronních operací běžet paralelně.
- [ ] Když chceme vždy zrušit předchozí request.
- [ ] Jen pro synchronní streamy.
- [ ] Pouze v route guardech.

### Co znamená change detection v Angularu?
- [x] Mechanismus, kterým Angular zjišťuje změny dat a promítá je do template.
- [ ] Generování nového bundlu po změně souboru.
- [ ] Runtime kontrola typů v TypeScriptu.
- [ ] Mechanismus pro diff databázových migrací.

### Co přináší strategie `OnPush`?
- [x] Omezuje běžnou change detection na explicitnější scénáře a může snížit zbytečné přepočty.
- [ ] Vynucuje rerender po každém ticku.
- [ ] Funguje pouze v template-driven forms.
- [ ] Nahrazuje potřebu `@Input()`.

### Co je častý důvod, proč se `OnPush` komponenta neaktualizuje?
- [x] Mutujeme objekt in-place místo předání nové reference nebo nespustíme vhodný trigger změny.
- [ ] Angular s OnPush neumí renderovat pole.
- [ ] OnPush funguje jen na serveru.
- [ ] OnPush automaticky ignoruje všechny eventy.

### K čemu slouží `ChangeDetectorRef`?
- [x] K jemnější práci s change detection, například k manuálnímu označení komponenty k přepočtu.
- [ ] K injektování routy do child komponenty.
- [ ] K práci s DOM eventy v CSS.
- [ ] K vytvoření observable ze signálu.

### Co je Angular signal?
- [x] Reaktivní primitivum reprezentující čitelnou a zapisovatelnou hodnotu se sledováním závislostí.
- [ ] Typ route guardu.
- [ ] Náhrada za dependency injection.
- [ ] Mechanismus pro SSR cache.

### Jaký je vztah mezi signals a change detection?
- [x] Signals mohou pomáhat přesněji vyjadřovat závislosti a lépe řídit aktualizace UI.
- [ ] Signals vypínají template renderování.
- [ ] Signals fungují jen mimo komponenty.
- [ ] Signals jsou jen alias pro Promise.

### Co je pipe v Angularu?
- [x] Mechanismus pro transformaci hodnoty v template, například datum nebo formát čísla.
- [ ] Náhrada za RxJS operator.
- [ ] API pro HTTP request pipeline.
- [ ] Komponenta pro lazy loading.

### Kdy dává smysl vlastní pipe?
- [x] Když chceme opakovaně a čitelně převádět data do prezentačního formátu v template.
- [ ] Když potřebujeme spravovat dependency injection.
- [ ] Když chceme mutovat formulářový model.
- [ ] Jen pro route parametry.

### K čemu slouží `ngFor`?
- [x] K iteraci přes kolekci a renderování opakujících se prvků v template.
- [ ] K podmíněnému renderování jednoho elementu.
- [ ] K registraci nové služby.
- [ ] K definici CSS scoped stylů.

### K čemu slouží `ngIf`?
- [x] K podmíněnému zobrazení nebo odstranění části template podle výrazu.
- [ ] K iteraci přes observable.
- [ ] K injektování route guardů.
- [ ] K vytvoření output eventu.

### Proč je dobré používat `trackBy` u velkých seznamů?
- [x] Umožňuje Angularu efektivněji znovu použít DOM prvky a omezit zbytečné změny při updatech seznamu.
- [ ] Přidává itemům automaticky unikátní CSS třídy.
- [ ] Nahrazuje potřebu `ngFor`.
- [ ] Funguje jen s signals.

### Co je `ViewChild`?
- [x] Mechanismus pro získání reference na child komponentu, direktivu nebo DOM element z template.
- [ ] Způsob, jak předat data z child do parentu.
- [ ] Náhrada za route resolver.
- [ ] RxJS operátor pro práci s child observables.

### K čemu slouží lifecycle hook `ngOnInit`?
- [x] K inicializační logice po vytvoření komponenty a nastavení vstupů.
- [ ] K cleanupu subscription při destroy.
- [ ] K zachytávání route errorů.
- [ ] K vytvoření Angular modulu.

### Kdy se používá `ngOnDestroy`?
- [x] Při úklidu subscription, timerů nebo jiných zdrojů před zničením komponenty či služby.
- [ ] Pro nastavení default props.
- [ ] Jen při server-side renderingu.
- [ ] Pro registraci lazy route.

### Co je hlavní role resolveru v routeru?
- [x] Připravit data před aktivací route, aby je komponenta měla k dispozici už při vstupu.
- [ ] Ověřit CSS validitu stránky.
- [ ] Nahradit všechny HTTP interceptory.
- [ ] Převest observable na promise bez čekání.

### K čemu slouží `router-outlet`?
- [x] Označuje místo v template, kam se renderuje komponenta aktuální routy.
- [ ] Vytváří nový dependency injector.
- [ ] Převádí URL na query string.
- [ ] Ukládá historii navigací do localStorage.

### Jaký je rozdíl mezi `CanActivate` a `CanDeactivate` guardem?
- [x] `CanActivate` rozhoduje o vstupu na route, `CanDeactivate` o možnosti ji opustit.
- [ ] `CanActivate` je pro SSR a `CanDeactivate` pro CSR.
- [ ] Oba guardy řeší pouze lazy loading modulů.
- [ ] Mezi nimi není rozdíl.

### Proč bývá výhodné oddělit smart a presentational komponenty?
- [x] Zlepšuje to čitelnost, testovatelnost a rozdělení zodpovědností mezi data a prezentaci.
- [ ] Angular jinak nespustí change detection.
- [ ] Presentational komponenty nesmí mít template.
- [ ] Smart komponenty nelze routovat.

### Co je hlavní přínos Angular CLI?
- [x] Standardizuje build, scaffold, testování a konfiguraci projektu.
- [ ] Nahrazuje všechny npm balíčky jediným příkazem.
- [ ] Slouží výhradně k SSR renderu.
- [ ] Vytváří automaticky backend API.

### Co dělá `providedIn: 'root'` u služby?
- [x] Registruje službu v root injector tree a typicky z ní dělá singleton pro aplikaci.
- [ ] Omezuje službu jen na jednu komponentu.
- [ ] Slouží ke konfiguraci routingu.
- [ ] Zajišťuje, že se služba nikdy neinicializuje.

### Co je hlavní riziko těsného propojení komponent přes služby s mutable stavem?
- [x] Může vzniknout skrytá vazba, hůře předvídatelné chování a složitější debugování.
- [ ] Angular pak zakáže dependency injection.
- [ ] Service se automaticky stanou immutable.
- [ ] Mutable stav lze držet jen ve formulářích.

### K čemu slouží testovací utility jako TestBed?
- [x] K vytvoření testovacího Angular prostředí pro komponenty, služby a DI konfiguraci.
- [ ] K produkčnímu bootstrapu aplikace.
- [ ] K přímému nasazení buildu na server.
- [ ] K převodu observables na signály.

### Proč je důležité nepřetěžovat template složitou logikou?
- [x] Zhoršuje to čitelnost, testovatelnost i výkon, protože template má sloužit hlavně k deklarativní prezentaci.
- [ ] Protože Angular template nepodporuje výrazy.
- [ ] Protože vše musí být vždy v CSS.
- [ ] Jen kvůli tomu, aby fungoval router.

### Co je hlavní cíl server-side renderingu v Angular aplikaci?
- [x] Zlepšit first paint, SEO a dostupnost obsahu před plnou hydratací klienta.
- [ ] Nahradit potřebu browser JavaScriptu ve všech scénářích.
- [ ] Zakázat routování na klientu.
- [ ] Vyřešit memory leak ve službách.

### Jaký je typický rozdíl mezi `Subject` a `BehaviorSubject`?
- [x] `BehaviorSubject` drží a okamžitě poskytuje poslední hodnotu novým subscriberům, `Subject` ne.
- [ ] `Subject` je immutable a `BehaviorSubject` mutable objekt.
- [ ] `BehaviorSubject` funguje jen v routeru.
- [ ] `Subject` nelze použít v service.

## TypeScript

### Jaký je hlavní rozdíl mezi `any` a `unknown`?
- [x] `unknown` vyžaduje před použitím zúžení typu nebo kontrolu, zatímco `any` vypíná typovou kontrolu.
- [ ] `any` lze použít jen pro string a `unknown` jen pro object.
- [ ] `unknown` je totéž co `never`.
- [ ] `any` je bezpečnější než přesně definovaný typ.

### Co typicky reprezentuje typ `never`?
- [x] Stav, který by neměl nikdy nastat, nebo funkci, která nikdy normálně nevrátí hodnotu.
- [ ] Libovolnou hodnotu bez omezení.
- [ ] Každou hodnotu kromě `null`.
- [ ] Alias pro `void`.

### Co je union type?
- [x] Typ, který může nabývat jedné z více specifikovaných variant.
- [ ] Typ vzniklý spojením vlastností více objektů dohromady.
- [ ] Typ určený výhradně pro pole.
- [ ] Mechanismus pro runtime validaci JSON.

### Co je intersection type?
- [x] Typ kombinující požadavky více typů současně.
- [ ] Typ pro výběr právě jedné z více variant.
- [ ] Typ určený jen pro stringové literály.
- [ ] Typ pro asynchronní funkce.

### Co je type narrowing?
- [x] Zúžení širšího typu na konkrétnější variantu pomocí kontrol v kódu.
- [ ] Automatické přidání nových property do objektu.
- [ ] Převod TypeScriptu na JavaScript během buildu.
- [ ] Zkrácení názvů typů kvůli výkonu.

### K čemu slouží type guard?
- [x] K ověření nebo deklaraci, že hodnota odpovídá konkrétnějšímu typu.
- [ ] K ochraně importů před circular dependency.
- [ ] K vytvoření readonly objektu.
- [ ] K serializaci typu do JSON.

### Jaký je praktický rozdíl mezi `interface` a `type`?
- [x] Obě umí popsat objekty, ale `type` lépe reprezentuje i unie či aliasy a `interface` podporuje declaration merging.
- [ ] `interface` lze použít jen pro class a `type` jen pro funkce.
- [ ] `type` se vyhodnocuje za běhu, `interface` jen při buildu.
- [ ] Mezi nimi není žádný rozdíl ani v možnostech použití.

### Co dělá `extends` u generic constraintu?
- [x] Omezuje generický parametr na typy splňující danou podmínku.
- [ ] Vynucuje dědičnost pouze pro class komponenty.
- [ ] Převádí union na intersection.
- [ ] Zajišťuje runtime validaci vstupu.

### K čemu slouží generics?
- [x] K psaní znovupoužitelných typově bezpečných funkcí, tříd a utilit pracujících s různými typy.
- [ ] K překladu TypeScriptu do JavaScriptu.
- [ ] K importu typů z externí knihovny.
- [ ] K vypnutí inference v editoru.

### Co znamená `keyof T`?
- [x] Sjednocení názvů klíčů typu `T`.
- [ ] Vrací typ hodnot v objektu `T`.
- [ ] Získá pouze required property typu `T`.
- [ ] Vytvoří readonly kopii typu `T`.

### K čemu slouží `typeof` v type position?
- [x] Umožňuje odvodit typ z existující hodnoty nebo symbolu.
- [ ] Převádí runtime hodnotu na string.
- [ ] Nahrazuje `instanceof` v JavaScriptu.
- [ ] Funguje pouze pro primitivní typy.

### Co je indexed access type jako `T[K]`?
- [x] Typ hodnoty na klíči `K` v typu `T`.
- [ ] Operace pro přístup do pole pouze za běhu.
- [ ] Alias pro `keyof T`.
- [ ] Vždy vrací `string`.

### Co je mapped type?
- [x] Typ vytvářený iterací přes klíče jiného typu a transformací jejich vlastností.
- [ ] Typ určený pouze pro mapové kolekce.
- [ ] Runtime API pro převod objektů.
- [ ] Mechanismus pro deduplikaci union typů.

### Co je conditional type?
- [x] Typ definovaný podmínkou ve stylu `T extends U ? X : Y`.
- [ ] Typ, který lze použít jen uvnitř `if` bloku.
- [ ] Alias pro optional property.
- [ ] Typ dostupný jen v `.d.ts` souborech.

### K čemu slouží utility type `Partial<T>`?
- [x] Udělá všechny vlastnosti typu `T` volitelnými.
- [ ] Udělá všechny vlastnosti typu `T` readonly.
- [ ] Vybere jen polovinu vlastností typu `T`.
- [ ] Odstraní z typu všechny metody.

### K čemu slouží `Required<T>`?
- [x] Udělá všechny vlastnosti typu `T` povinnými.
- [ ] Vybere jen required vlastnosti a zbytek smaže z runtime objektu.
- [ ] Přidá default values do objektu.
- [ ] Vynutí, že typ musí obsahovat alespoň jednu metodu.

### K čemu slouží `Pick<T, K>`?
- [x] Vytvoří nový typ obsahující pouze vybrané klíče `K` z typu `T`.
- [ ] Odebírá klíče `K` z typu `T`.
- [ ] Vybírá první hodnotu z union typu.
- [ ] Mění všechny property na optional.

### K čemu slouží `Omit<T, K>`?
- [x] Vytvoří nový typ bez klíčů `K` z typu `T`.
- [ ] Udělá klíče `K` readonly.
- [ ] Vybere pouze klíče `K`.
- [ ] Přidá nový klíč `K` do typu `T`.

### K čemu slouží `Record<K, V>`?
- [x] Vytvoří objektový typ s klíči `K` a hodnotami typu `V`.
- [ ] Převede pole na tuple.
- [ ] Umožní serializovat typ do JSON.
- [ ] Funguje pouze pro stringové hodnoty.

### Co dělá `ReturnType<T>`?
- [x] Získá návratový typ funkce `T`.
- [ ] Získá typ prvního argumentu funkce `T`.
- [ ] Udělá funkci readonly.
- [ ] Vynutí, že funkce vrací Promise.

### K čemu slouží klíčové slovo `infer`?
- [x] K zachycení a odvození části typu uvnitř conditional types.
- [ ] K deklaraci interface implementace.
- [ ] K ručnímu vypnutí inference v celém souboru.
- [ ] K překladu TS typů do runtime validátorů.

### Co znamená `foo?: string`?
- [x] Vlastnost může chybět nebo být typu `string` podle pravidel TypeScriptu a nastavení compileru.
- [ ] Vlastnost musí být vždy `null`.
- [ ] Vlastnost je readonly.
- [ ] Vlastnost musí být funkce vracející string.

### Kdy je `!` non-null assertion riskantní?
- [x] Když jím umlčíme typovou kontrolu bez jistoty, že hodnota opravdu není `null` nebo `undefined`.
- [ ] Když ho použijeme uvnitř interface.
- [ ] Když pracujeme s `string`.
- [ ] Riskantní není nikdy.

### Co je type assertion jako `value as Foo`?
- [x] Instrukce pro kompilátor, jak má s hodnotou typově zacházet; sama o sobě neprovádí runtime validaci.
- [ ] Bezpečná runtime konverze hodnoty do jiného typu.
- [ ] Povinný zápis pro každé API response.
- [ ] Způsob, jak vytvořit generický typ.

### Co znamená `readonly` u property?
- [x] V TypeScriptu brání jejímu přepsání po inicializaci na typové úrovni.
- [ ] V runtime property zcela zamkne přes `Object.freeze`.
- [ ] Umožní property smazat.
- [ ] Dělá property automaticky optional.

### Co je discriminated union?
- [x] Union typů sdílejících diskriminační klíč, podle kterého lze bezpečně zúžit konkrétní variantu.
- [ ] Intersection dvou interface se stejným názvem.
- [ ] Typ určený jen pro enumy.
- [ ] Mechanismus pro serializaci unie do stringu.

### Jak ověřit exhaustiveness nad discriminated union?
- [x] Například přes `switch` a helper s typem `never` v default větvi.
- [ ] Přes `JSON.stringify`.
- [ ] Jen pomocí runtime `instanceof`.
- [ ] Exhaustiveness nelze v TypeScriptu řešit.

### K čemu slouží literal types?
- [x] Umožňují pracovat s konkrétními hodnotami jako typy, například `'open' | 'closed'`.
- [ ] Slouží jen k typování číselných polí.
- [ ] Jsou to runtime konstanty vygenerované kompilátorem.
- [ ] Nahrazují potřebu enumů ve všech případech.

### Co dělá `as const`?
- [x] Zužuje hodnotu na co nejvíce konkrétní literal typy a označuje vnořené property jako readonly.
- [ ] Překládá objekt na interface.
- [ ] Vynucuje deep clone objektu.
- [ ] Mění pole na mutable seznam.

### Co je tuple?
- [x] Pole s pevně definovaným počtem a typy prvků na konkrétních pozicích.
- [ ] Objekt s dynamickými string klíči.
- [ ] Alias pro union string literalů.
- [ ] Speciální Promise typ.

### Kdy mají smysl function overloads?
- [x] Když jedna funkce podporuje více kombinací parametrů a návratových typů s různým kontraktem.
- [ ] Když chceme vynutit asynchronní chování funkce.
- [ ] Pouze při exportu default class.
- [ ] Overload je povinný pro každou generickou funkci.

### Co znamená structural typing v TypeScriptu?
- [x] Kompatibilita typů se určuje podle tvaru a členů, ne podle nominální identity typu.
- [ ] Typy jsou kompatibilní pouze, když dědí ze stejné class.
- [ ] Každý typ musí mít unikátní runtime identifikátor.
- [ ] TypeScript porovnává typy pouze podle názvu.

### K čemu slouží `satisfies` operátor?
- [x] Ověří, že hodnota odpovídá zadanému typu, aniž by zbytečně rozšířil nebo přepsal inferovaný typ hodnoty.
- [ ] Převádí objekt na `unknown`.
- [ ] Nahrazuje `implements` u tříd.
- [ ] Funguje jen pro enumy.

### Co je declaration merging?
- [x] Možnost, aby se více deklarací se stejným jménem v některých případech sloučilo do jednoho typu.
- [ ] Automatické spojení všech importů v souboru.
- [ ] Runtime spojení dvou objektů do jednoho.
- [ ] Funkce dostupná jen v JavaScriptu.

### Co dělá `strictNullChecks`?
- [x] Vynucuje explicitní práci s `null` a `undefined` místo jejich tichého přehlížení.
- [ ] Zakazuje používat optional property.
- [ ] Přidává runtime kontrolu na každý `if`.
- [ ] Zajistí, že žádná proměnná nikdy nebude undefined.

### Co znamená `noImplicitAny`?
- [x] Kompilátor hlásí chyby tam, kde typ padá na implicitní `any`.
- [ ] Všechny explicitní `any` jsou automaticky zakázané v runtime.
- [ ] TypeScript přestane inferovat typy funkcí.
- [ ] Mění všechny chybějící typy na `unknown`.

### Co řeší `strict` režim v `tsconfig`?
- [x] Zapíná sadu přísnějších typových kontrol pro bezpečnější a přesnější práci s typy.
- [ ] Překládá TypeScript do přísného JavaScript modu.
- [ ] Vypíná možnost používat generics.
- [ ] Je určen jen pro testovací build.

### Co znamená, že `implements` u class je jen compile-time kontrakt?
- [x] TypeScript zkontroluje shodu se smlouvou typu, ale negeneruje kvůli tomu zvláštní runtime chování.
- [ ] `implements` automaticky vytvoří instance všech metod.
- [ ] `implements` funguje jen s abstraktní třídou.
- [ ] `implements` přidá k objektu metadata do JSON.

### K čemu slouží default generic parametr?
- [x] Umožňuje generiku použít výchozí typ, pokud volající jiný typ nedodá.
- [ ] Zakáže inference generického typu.
- [ ] Slouží pouze k typování class decoratorů.
- [ ] Převádí generický typ na union.

### Co je výhodou inference generického typu z argumentu funkce?
- [x] Volající často nemusí typový parametr zapisovat ručně a přesto získá přesný typový výsledek.
- [ ] Funkce se tím stává asynchronní.
- [ ] Inference vždy vrací `unknown`.
- [ ] Funguje jen pro pole stringů.

### K čemu slouží template literal types?
- [x] K vytváření nových string typů skládáním jiných literal typů.
- [ ] K renderování HTML template na serveru.
- [ ] K zápisu víceřádkových stringů v runtime.
- [ ] Jen k typování CSS modulů.

### Co je distribuční conditional type?
- [x] Conditional type, který se při použití nad union typem aplikuje na každou variantu zvlášť.
- [ ] Conditional type, který se aplikuje jen na první položku unionu.
- [ ] Typ, který lze použít jen v distribuovaném systému.
- [ ] Mechanismus pro rozdělení objektu na dva typy.

### Kdy dává smysl použít branded typ?
- [x] Když chceme odlišit dvě hodnoty se stejnou runtime reprezentací, ale odlišným významem, například `UserId` a `OrderId`.
- [ ] Když chceme z objektu udělat readonly typ.
- [ ] Pouze při definici enumů.
- [ ] Branded typy jsou povinné pro každé API DTO.

### Co je častý problém s příliš agresivním používáním `as`?
- [x] Lze obejít typovou bezpečnost a skrýt chyby, které se pak projeví až v runtime.
- [ ] Kód se kvůli tomu nepřeloží do JavaScriptu.
- [ ] TypeScript pak vypne všechny utility types.
- [ ] `as` automaticky změní runtime shape objektu.

### Jak se liší `null` a `undefined` v TypeScriptu?
- [x] Jsou to dvě odlišné hodnoty a při zapnutém `strictNullChecks` i odlišné typové případy.
- [ ] Jsou vždy zaměnitelné a TypeScript je nerozlišuje.
- [ ] `undefined` lze použít jen v browseru.
- [ ] `null` je v TypeScriptu zakázaný.

### K čemu slouží optional chaining `?.`?
- [x] Umožňuje bezpečně přistoupit k dalšímu členu jen pokud předchozí hodnota není `null` ani `undefined`.
- [ ] Převádí `null` automaticky na prázdný string.
- [ ] Nahrazuje nutnost typového zúžení v celé funkci.
- [ ] Funguje jen pro Promise.

### Co dělá nullish coalescing `??`?
- [x] Vrací pravou stranu jen tehdy, když levá je `null` nebo `undefined`, ne pro každou falsy hodnotu.
- [ ] Vrací pravou stranu pro `0` i prázdný string stejně jako `||`.
- [ ] Slouží k vytváření union typů.
- [ ] Je to pouze typová konstrukce bez runtime chování.

### Jaký je přínos `readonly` polí a utilit jako `ReadonlyArray<T>`?
- [x] Typově zabraňují mutačním operacím nad kolekcí na místech, kde chceme zachovat imutabilitu.
- [ ] Automaticky deep-clonují data při každém čtení.
- [ ] Lze je použít jen s tuple.
- [ ] Znamenají, že pole nelze iterovat.

### Co je smysl `Extract<T, U>` utility typu?
- [x] Vezme z typu `T` jen ty části, které jsou kompatibilní s `U`.
- [ ] Odebere z `T` všechny části kompatibilní s `U`.
- [ ] Vytvoří z `T` readonly kopii.
- [ ] Vrací první vlastnost objektového typu `T`.

### Co dělá `Exclude<T, U>`?
- [x] Odebere z typu `T` ty části, které jsou kompatibilní s `U`.
- [ ] Vybere z `T` jen části kompatibilní s `U`.
- [ ] Změní `T` na intersection s `U`.
- [ ] Vytvoří z `T` runtime validátor.

## CSS / Styling

### Co určuje CSS cascade?
- [x] Jak se rozhodne, které pravidlo se použije, když na stejný element cílí více stylů.
- [ ] Jak browser řadí HTML elementy v DOM.
- [ ] Jak se načítají JavaScript moduly.
- [ ] Jak se serializují CSS variables.

### Co je CSS specificity?
- [x] Mechanismus určující sílu selektoru při konfliktu více pravidel.
- [ ] Množství vlastností zapsaných v jednom pravidle.
- [ ] Počet media query v souboru.
- [ ] Typ renderovacího engine prohlížeče.

### Který selektor má obecně vyšší specificitu?
- [x] `#header .item`
- [ ] `.item`
- [ ] `div`
- [ ] `*`

### Co dělá `!important`?
- [x] Uměle zvýší prioritu deklarace v cascade, a proto by se mělo používat střídmě.
- [ ] Udělá z vlastnosti animovatelnou.
- [ ] Zrychlí vykreslení stylu v browseru.
- [ ] Funguje jen v inline stylech.

### Co je box model?
- [x] Model zahrnující content, padding, border a margin kolem elementu.
- [ ] Mechanismus pro flex layout.
- [ ] API pro práci s CSS variables.
- [ ] Typ CSS selektoru pro kontejnery.

### Co znamená `box-sizing: border-box`?
- [x] Šířka a výška elementu zahrnují i padding a border.
- [ ] Border se vykresluje mimo layout.
- [ ] Margin se započítává do obsahu.
- [ ] Element ignoruje padding.

### Jaký je rozdíl mezi margin a padding?
- [x] Margin vytváří prostor vně elementu, padding uvnitř kolem obsahu.
- [ ] Margin je uvnitř a padding vně elementu.
- [ ] Jsou to synonyma.
- [ ] Padding lze použít jen pro text.

### K čemu slouží `display: flex`?
- [x] K jednorozměrnému layoutu položek v řádku nebo sloupci s flexibilním rozmisťováním.
- [ ] K tvorbě dvourozměrné tabulky podobné gridu.
- [ ] K absolutnímu pozicování potomků.
- [ ] Jen k centrování textu.

### Co dělá `justify-content` ve flexboxu?
- [x] Zarovnává položky podél hlavní osy kontejneru.
- [ ] Zarovnává položky vždy vertikálně.
- [ ] Nastavuje jejich šířku.
- [ ] Ovlivňuje pouze grid layout.

### Co dělá `align-items` ve flexboxu?
- [x] Zarovnává položky napříč vedlejší osou kontejneru.
- [ ] Řídí pořadí flex položek.
- [ ] Nastavuje mezeru mezi řádky.
- [ ] Funguje jen s `position: absolute`.

### K čemu slouží `gap`?
- [x] Nastavuje mezery mezi položkami ve flexu nebo gridu bez potřeby hacků přes margin.
- [ ] Přidává prostor jen kolem posledního prvku.
- [ ] Nahrazuje `padding` uvnitř elementu.
- [ ] Funguje pouze pro textové uzly.

### Co je hlavní rozdíl mezi flexboxem a gridem?
- [x] Flexbox je primárně jednorozměrný layout, grid dvourozměrný.
- [ ] Grid funguje jen na serveru a flexbox jen v browseru.
- [ ] Flexbox neumí centrovat.
- [ ] Grid nepodporuje responzivní design.

### K čemu slouží `display: grid`?
- [x] K definici dvourozměrné mřížky s řádky a sloupci.
- [ ] K vypnutí layoutu elementu.
- [ ] K nahrazení media queries.
- [ ] Jen k pozicování přes pixelové souřadnice.

### Co dělá `grid-template-columns`?
- [x] Definuje strukturu sloupců grid kontejneru.
- [ ] Nastavuje počet řádků ve flexboxu.
- [ ] Přidává border mezi sloupci.
- [ ] Určuje pořadí HTML prvků v DOM.

### Co znamená jednotka `fr` v CSS Gridu?
- [x] Podíl z dostupného volného prostoru v grid kontejneru.
- [ ] Fixní počet pixelů.
- [ ] Procento z viewport height.
- [ ] Jednotka pro písmo.

### Kdy použít `minmax()` v gridu?
- [x] Když chceme definovat minimální a maximální velikost tracku flexibilním způsobem.
- [ ] Když chceme vypnout responsive chování.
- [ ] Když potřebujeme absolutně pozicovat child element.
- [ ] Pouze pro animace.

### Co dělá `position: relative`?
- [x] Umožní posouvat element relativně k jeho běžné pozici a vytvořit positioning context pro absolutně pozicované potomky.
- [ ] Vždy vyjme element z dokumentového toku.
- [ ] Zarovná element doprostřed viewportu.
- [ ] Zafixuje element při scrollu.

### Co dělá `position: absolute`?
- [x] Vyjme element z normálního toku a pozicuje ho vůči nejbližšímu vhodnému positioning contextu.
- [ ] Udržuje element vždy při horním okraji viewportu.
- [ ] Funguje stejně jako `sticky`.
- [ ] Lze použít jen v gridu.

### Jak funguje `position: sticky`?
- [x] Element se chová relativně, dokud nedosáhne definovaného offsetu, pak se přichytí v rámci scroll kontejneru.
- [ ] Je vždy fixovaný vůči viewportu.
- [ ] Je to alias pro `absolute`.
- [ ] Funguje jen na `<header>` elementu.

### Co je stacking context?
- [x] Kontext určující, jak se skládají elementy na ose Z vůči sobě.
- [ ] Seznam všech `z-index` hodnot v dokumentu.
- [ ] Mechanismus pro dědičnost CSS variables.
- [ ] Grid vrstva pro auto-placement.

### Proč někdy `z-index` „nefunguje“?
- [x] Protože element není v očekávaném stacking contextu nebo nemá vhodně nastavené positioning podmínky.
- [ ] Protože `z-index` funguje jen na flex itemech.
- [ ] Protože browser ignoruje hodnoty větší než 10.
- [ ] Protože `z-index` lze použít jen s `display: grid`.

### K čemu slouží media queries?
- [x] K aplikaci stylů podle vlastností zařízení nebo viewportu, například šířky obrazovky.
- [ ] K asynchronnímu načítání stylů z API.
- [ ] K transformaci DOM stromu.
- [ ] Jen k nastavení font-size.

### Co je mobile-first přístup?
- [x] Návrh základních stylů pro menší zařízení a jejich postupné rozšiřování pro větší breakpointy.
- [ ] Stylování pouze pro mobily bez desktop verze.
- [ ] Začínat vždy desktop layoutem a pak vše skrývat.
- [ ] Používat jen `max-width` media queries.

### Kdy se hodí použít `rem` místo `px`?
- [x] Když chceme škálování založené na root font-size a lepší práci s dostupností a responzivitou.
- [ ] Když potřebujeme pevnou hodnotu nezávislou na uživatelském nastavení.
- [ ] Jen pro border-radius.
- [ ] `rem` nelze použít pro spacing.

### Jaký je rozdíl mezi `em` a `rem`?
- [x] `em` se odvíjí od font-size aktuálního kontextu, `rem` od root elementu.
- [ ] `em` je vždy pevný pixel a `rem` procento.
- [ ] `rem` funguje jen pro text.
- [ ] Mezi nimi není rozdíl.

### Co dělá `overflow: hidden`?
- [x] Skryje obsah přesahující obsahový box elementu.
- [ ] Zakáže scroll celé stránky.
- [ ] Přesune obsah do nového stacking contextu vždy.
- [ ] Zafixuje výšku elementu na viewport.

### K čemu slouží `object-fit: cover`?
- [x] Umožňuje obrázku vyplnit box se zachováním poměru stran i za cenu ořezu.
- [ ] Roztáhne obrázek bez zachování poměru stran.
- [ ] Funguje jen pro background-image.
- [ ] Přidává obrázku border-box sizing.

### Co je CSS custom property?
- [x] Uživatelsky definovaná CSS proměnná zapisovaná například jako `--color-primary`.
- [ ] Typ selektoru pro root element.
- [ ] JavaScriptová proměnná dostupná v CSS bez explicitního předání.
- [ ] Pouze alias pro SASS proměnnou.

### Jaký je přínos CSS variables oproti hardcoded hodnotám?
- [x] Zlepšují znovupoužití, theming a centrální správu hodnot jako barvy nebo spacing.
- [ ] Automaticky optimalizují bundl na polovinu.
- [ ] Fungují jen v preprocessorech.
- [ ] Nelze je kombinovat s media queries.

### Co znamená inheritance v CSS?
- [x] Některé vlastnosti se dědí z rodiče na potomky, jiné ne.
- [ ] Všechny vlastnosti se vždy dědí.
- [ ] Dědičnost funguje jen pro flex kontejnery.
- [ ] Dědičnost se týká jen CSS modulů.

### Co je častý důvod nechtěných layout shiftů?
- [x] Pozdě načtené zdroje bez rezervovaného prostoru, například obrázky bez rozměrů.
- [ ] Použití `display: block`.
- [ ] Nastavení `box-sizing: border-box`.
- [ ] Použití CSS variables.

### K čemu slouží pseudo class `:focus-visible`?
- [x] K stylování focus stavu primárně v případech, kdy je focus relevantní pro klávesnicovou navigaci.
- [ ] K skrytí focusu pro všechny uživatele.
- [ ] K označení elementu, který je právě hovernutý.
- [ ] K výběru všech disabled inputů.

### Proč není dobrý nápad globálně odstranit outline bez náhrady?
- [x] Zhoršuje to dostupnost pro uživatele navigující klávesnicí.
- [ ] Protože outline nejde v CSS vypnout.
- [ ] Protože browser pak přestane podporovat hover.
- [ ] Je to problém pouze v Safari.

### Co je pseudo element `::before`?
- [x] Virtuální element vložený před obsah elementu, typicky pro dekorativní nebo pomocný obsah.
- [ ] Mechanismus pro výběr předchozího sibling elementu.
- [ ] Alias pro `:first-child`.
- [ ] Způsob, jak definovat fallback font.

### K čemu slouží `transition`?
- [x] K plynulému animování změny hodnot určitých CSS vlastností mezi dvěma stavy.
- [ ] K vykreslení canvas animace po framech.
- [ ] K přechodu mezi route v SPA bez JavaScriptu.
- [ ] Jen k animaci `display`.

### Jaký je rozdíl mezi `transition` a `animation`?
- [x] Transition reaguje na změnu stavu, animation může běžet nezávisle podle keyframes.
- [ ] Animation je jen jiný název pro transition.
- [ ] Transition neumí časování.
- [ ] Animation nelze opakovat.

### Proč se `display` typicky neanimuje dobře?
- [x] Protože jde o diskrétní vlastnost bez plynulé interpolace mezi hodnotami.
- [ ] Protože `display` lze animovat jen přes JavaScript.
- [ ] Protože browser neumí animovat opacity.
- [ ] Protože `display` funguje jen na inline elementech.

### K čemu slouží `transform: translate(...)` při animacích?
- [x] Umožňuje vizuální posun elementu často s lepším výkonem než změna layoutových vlastností typu `top/left`.
- [ ] Přepočítá DOM strom.
- [ ] Nahrazuje `position: absolute`.
- [ ] Mění velikost fontu podle viewportu.

### Co je hlavní role semantic HTML ve stylingu a dostupnosti?
- [x] Poskytuje smysluplnou strukturu pro uživatele i technologie asistivního přístupu a usnadňuje robustnější stylování.
- [ ] Nahrazuje všechny ARIA atributy ve všech situacích.
- [ ] Slouží pouze pro SEO a nemá vztah ke stylům.
- [ ] Zabraňuje použití flexboxu.

### Proč je důležitý dostatečný kontrast textu a pozadí?
- [x] Zlepšuje čitelnost a dostupnost zejména pro uživatele se zrakovým omezením nebo v horších podmínkách.
- [ ] Jen kvůli tomu, aby CSS bylo kratší.
- [ ] Kontrast je důležitý pouze na mobilu.
- [ ] Browser si kontrast vždy automaticky dopočítá.

### Co je výhoda utility-first přístupu ke stylování?
- [x] Umožňuje rychle skládat konzistentní vzhled z menších stavebních tříd, pokud je systém dobře navržený.
- [ ] Úplně eliminuje potřebu design systému.
- [ ] Funguje jen bez komponentového frameworku.
- [ ] Zabraňuje použití media queries.

### Jaká je nevýhoda příliš hlubokých selektorů?
- [x] Zvyšují coupling na strukturu DOM, hůř se udržují a komplikují override pravidel.
- [ ] Browser je neumí zpracovat.
- [ ] Jsou automaticky pomalejší než inline styly ve všech situacích o řády.
- [ ] Fungují pouze v preprocessorech.

### Kdy má smysl používat BEM nebo podobnou naming konvenci?
- [x] Když chceme zlepšit čitelnost a předvídatelnost CSS ve větších codebase.
- [ ] Jen když používáme čistě inline styly.
- [ ] Pouze pro animace.
- [ ] Když nechceme mít komponenty.

### Co je hlavní přínos CSS modulů?
- [x] Omezují kolize názvů tříd lokálním scope pro konkrétní komponentu nebo soubor.
- [ ] Vypínají potřebu bundleru.
- [ ] Umožňují používat pouze grid.
- [ ] Přidávají runtime validaci stylelint pravidel.

### Kdy může inline style být nevhodný?
- [x] Když chceme pseudo třídy, media queries, lepší znovupoužitelnost nebo oddělení design systému od logiky.
- [ ] Vždy, inline style by se nikdy neměl používat.
- [ ] Jen u barvy textu.
- [ ] Pouze v TypeScript projektech.

### Co dělá `clamp()` v CSS?
- [x] Umožňuje definovat responsivní hodnotu s minimem, preferovanou hodnotou a maximem.
- [ ] Slouží ke skrytí přetečeného obsahu.
- [ ] Používá se pouze pro grid sloupce.
- [ ] Nahrazuje `calc()` ve všech případech.

### K čemu slouží `calc()`?
- [x] K výpočtu CSS hodnot kombinujících různé jednotky nebo výrazy.
- [ ] K spouštění JavaScriptu v CSS.
- [ ] K automatické minifikaci stylů.
- [ ] Jen pro výpočet barevných kontrastů.

### Co je container query?
- [x] Mechanismus pro aplikaci stylů podle velikosti kontejneru místo celého viewportu.
- [ ] Query nad databází stylů v browseru.
- [ ] Alias pro media query.
- [ ] Funkce dostupná jen v preprocessorech.

### Proč je dobré rezervovat prostor pro obrázky nebo embedovaný obsah?
- [x] Snižuje to layout shifts a zlepšuje stabilitu rozložení při načítání.
- [ ] Umožňuje to používat pouze JPEG obrázky.
- [ ] Browser jinak nenačte CSS.
- [ ] Jen kvůli zmenšení velikosti bundle.

### Jaký je přínos design tokenů pro stylování?
- [x] Zavádějí sdílený slovník hodnot jako barvy, spacing nebo typography pro konzistentní systém napříč aplikací.
- [ ] Nahrazují potřebu komponent.
- [ ] Slouží pouze k exportu do Figma.
- [ ] Fungují jen s CSS-in-JS.

## Next.js

### Co je hlavní role Next.js?
- [x] Framework nad Reactem poskytující routing, rendering strategie, serverové capability a produkční tooling.
- [ ] Náhrada za Node.js runtime.
- [ ] CSS framework pro utility třídy.
- [ ] Databázový ORM pro React aplikace.

### Co je App Router v Next.js?
- [x] Moderní routing systém založený na adresářové struktuře v `app/` a React Server Components.
- [ ] Legacy router dostupný pouze v `public/`.
- [ ] Nástroj pro navigaci mezi mikroservisami.
- [ ] API pro správu cookies v browseru bez serveru.

### Jak se v Next.js obvykle definuje route v App Routeru?
- [x] Přidáním složky a souboru `page.tsx` nebo `page.jsx` do odpovídající cesty v `app/`.
- [ ] Přidáním záznamu do `routes.json`.
- [ ] Jen přes JavaScriptové API v `next.config.js`.
- [ ] Vygenerováním route přes middleware.

### Co je layout v App Routeru?
- [x] Sdílená obalová komponenta pro část stromu rout, která může přetrvávat mezi navigacemi.
- [ ] Speciální CSS reset soubor.
- [ ] Náhrada za React context provider.
- [ ] Jen stránka s 404 obsahem.

### K čemu slouží `loading.tsx`?
- [x] K deklaraci loading UI pro route segment během načítání.
- [ ] K inicializaci globálního fetch klienta.
- [ ] K typování props stránky.
- [ ] K vypnutí server components.

### K čemu slouží `error.tsx`?
- [x] K zobrazení error boundary UI pro chyby v daném route segmentu.
- [ ] K logování build warningů při instalaci závislostí.
- [ ] K zachytávání TypeScript chyb v editoru.
- [ ] K definici HTTP 500 route handleru.

### Co je React Server Component v kontextu Next.js?
- [x] Komponenta renderovaná na serveru, která se neposílá klientovi jako plně interaktivní JavaScript.
- [ ] Každá komponenta uvnitř `pages/`.
- [ ] Komponenta, která umí běžet jen v browseru.
- [ ] Komponenta určená výhradně pro route handlers.

### Kdy je potřeba `use client`?
- [x] Když komponenta používá klientské funkce jako hooky, browser API nebo event handlery.
- [ ] Když chceme zapnout SSR.
- [ ] Když komponenta vrací JSX.
- [ ] Pouze při importu CSS modulu.

### Jaký je rozdíl mezi server a client komponentou?
- [x] Server komponenta běží a renderuje se na serveru, client komponenta se hydratuje a může být interaktivní v browseru.
- [ ] Client komponenta nemůže přijímat props.
- [ ] Server komponenta je vždy pomalejší.
- [ ] Client komponenta nemůže být součástí App Routeru.

### Co je hlavní výhoda server components?
- [x] Mohou přesunout část práce a data fetching na server, snížit objem klientského JavaScriptu a zlepšit performance.
- [ ] Umožňují používat browser API na serveru.
- [ ] Nahrazují potřebu API requestů úplně.
- [ ] Slouží jen pro stylování.

### Co je SSR?
- [x] Server-side rendering, kdy se HTML vyrenderuje na serveru při requestu.
- [ ] Statický export všech stránek při buildu.
- [ ] Vykreslení stránky pouze po hydrataci klientem.
- [ ] Streamování CSS do browseru.

### Co je SSG?
- [x] Static Site Generation, tedy vygenerování HTML při buildu před samotnými requesty uživatelů.
- [ ] Rendering pouze v browseru po načtení bundle.
- [ ] Server rendering při každém requestu.
- [ ] Tvorba sitemap souboru.

### Co je ISR?
- [x] Incremental Static Regeneration, tedy možnost periodicky nebo podmíněně obnovovat staticky generovaný obsah.
- [ ] Režim pouze pro image optimalizaci.
- [ ] Náhrada za middleware.
- [ ] Mechanismus pro invalidaci localStorage.

### K čemu slouží `revalidate` v Next.js?
- [x] K určení, po jaké době lze cacheovaný nebo statický obsah znovu obnovit.
- [ ] K přidání route guardu.
- [ ] K vynucení client component režimu.
- [ ] Jen k nastavení session cookie.

### Co dělá `generateStaticParams`?
- [x] Vrací sadu dynamických parametrů pro předgenerování dynamických rout při buildu.
- [ ] Vytváří TypeScript typy pro route parametry.
- [ ] Slouží k načtení env proměnných.
- [ ] Funguje jen v `pages/` routeru.

### Co je route handler v App Routeru?
- [x] Serverový handler pro HTTP metody definovaný souborem `route.ts` v `app/` stromu.
- [ ] React komponenta pro render API dokumentace.
- [ ] Build hook pro Vite pluginy.
- [ ] Náhrada za middleware.

### Kdy použít route handler místo klasické stránky?
- [x] Když chceme obsloužit HTTP request a vrátit data nebo jinou response místo HTML stránky.
- [ ] Když potřebujeme pouze zobrazit formulář.
- [ ] Když chceme client-side navigaci mezi stránkami.
- [ ] Jen pro statické assety.

### Co je middleware v Next.js?
- [x] Kód běžící před dokončením requestu, vhodný například pro přesměrování, auth kontrolu nebo rewrite logiku.
- [ ] React hook pro navigaci.
- [ ] Utility pro změnu CSS při scrollu.
- [ ] Vrstva pro databázové migrace.

### K čemu slouží `next/link`?
- [x] K klientské navigaci mezi stránkami s prefetchingem a SPA-like chováním.
- [ ] K vytváření externích URL na serveru.
- [ ] K načítání dat z API route.
- [ ] K definici canonical URL v metadatech.

### K čemu slouží `next/navigation`?
- [x] Poskytuje API pro navigaci a práci s route stavem v App Routeru.
- [ ] Nahrazuje `fetch`.
- [ ] Je určený pouze pro Pages Router.
- [ ] Slouží ke konfiguraci webpacku.

### Jaký je přínos `next/image`?
- [x] Nabízí optimalizaci obrázků, responzivní sizing a další performance benefity.
- [ ] Automaticky ukládá obrázky do databáze.
- [ ] Převádí všechny obrázky na SVG.
- [ ] Funguje jen pro lokální soubory bez externích URL.

### Proč je potřeba dávat pozor na šířku a výšku obrázků?
- [x] Pomáhá to rezervovat prostor a omezit layout shifts během načítání.
- [ ] Bez toho Next obrázek vůbec nenačte.
- [ ] Je to důležité jen pro PNG.
- [ ] Jen kvůli správnému exportu do PDF.

### K čemu slouží `generateMetadata`?
- [x] K výpočtu nebo doplnění metadat stránky, například title, description nebo Open Graph.
- [ ] K tvorbě TypeScript deklarací.
- [ ] K bootstrapu server actions.
- [ ] Jen k nastavení cookies.

### Co je server action?
- [x] Serverová funkce volaná z UI pro mutaci dat nebo formulářové operace bez nutnosti ručně vytvářet samostatné API endpointy pro každý případ.
- [ ] Funkce, která se vždy vykoná v browseru.
- [ ] Middleware pro SSR cache.
- [ ] Náhrada za React state.

### Kdy může být server action nevhodná?
- [x] Když potřebujeme veřejné API rozhraní nezávislé na Next UI vrstvě nebo přesnější kontrolu nad separací backendu.
- [ ] Když zpracováváme formulář.
- [ ] Když pracujeme s databází na serveru.
- [ ] Server action je vhodná vždy a bez výjimek.

### Co je data fetching cache v Next.js?
- [x] Systém, který může cachovat výsledky fetchů podle kontextu renderu a konfigurace.
- [ ] Browser localStorage wrapper.
- [ ] Jen interní cache pro CSS moduly.
- [ ] Mechanismus pro serializaci React props.

### Jaký je význam `cache: 'no-store'` u fetch?
- [x] Říká, že data se nemají cachovat a mají se načítat vždy čerstvě.
- [ ] Uloží response natrvalo do CDN.
- [ ] Vypne HTTP request a vrátí prázdný objekt.
- [ ] Funguje pouze v browser fetch, ne na serveru.

### Co znamená `dynamic = 'force-dynamic'`?
- [x] Vynucuje dynamické renderování segmentu namísto statické optimalizace.
- [ ] Zakáže používání client komponent.
- [ ] Umožní route parametru být volitelný.
- [ ] Přepne build do development modu.

### Co je hydration mismatch v Next.js?
- [x] Rozdíl mezi serverem vygenerovaným výstupem a tím, co klient očekává při hydrataci.
- [ ] Stav, kdy route handler vrací 404.
- [ ] Chyba při generování sitemap.
- [ ] Výsledek špatného importu CSS modulu.

### Proč může použití `Date.now()` nebo `Math.random()` přímo v renderu způsobovat problémy?
- [x] Může vést k odlišnému výstupu na serveru a klientu a tím k hydration mismatch.
- [ ] Protože tyto funkce v Node neexistují.
- [ ] Protože Next renderuje pouze statický JSON.
- [ ] Protože vypnou image optimization.

### Co je edge runtime?
- [x] Lehčí runtime určený pro běh blízko uživateli s určitými omezeními oproti plnému Node runtime.
- [ ] Režim pro GPU rendering Reactu.
- [ ] Databázová replika běžící v browseru.
- [ ] Jen jiný název pro client components.

### Kdy může být edge runtime nevhodný?
- [x] Když potřebujeme Node-specifická API nebo knihovny, které edge prostředí nepodporuje.
- [ ] Když chceme rychlejší response.
- [ ] Když používáme statické obrázky.
- [ ] Edge runtime je vždy lepší než Node runtime.

### Co je `notFound()` v App Routeru?
- [x] Helper pro ukončení renderu segmentu 404 scénářem.
- [ ] Funkce pro přesměrování na externí URL.
- [ ] API pro kontrolu existence souboru na disku.
- [ ] Hook pro získání route parametru.

### Co dělá `redirect()`?
- [x] Ukončí aktuální tok a vrátí přesměrování na jinou cestu.
- [ ] Překreslí pouze child komponentu bez změny URL.
- [ ] Slouží jen pro route handlers.
- [ ] Přidá meta refresh tag do HTML bez serveru.

### Jaký je rozdíl mezi statickým a dynamickým route segmentem?
- [x] Dynamický segment obsahuje parametr, například `[id]`, zatímco statický má pevnou cestu.
- [ ] Dynamický segment funguje jen na klientu.
- [ ] Statický segment nelze předgenerovat.
- [ ] Mezi nimi není rozdíl.

### Co je catch-all segment jako `[...slug]`?
- [x] Segment zachytávající více částí cesty do jednoho parametru.
- [ ] Route handler pro všechny HTTP metody.
- [ ] Mechanismus pro fallback CSS.
- [ ] Syntaxe pro optional chaining v URL.

### K čemu slouží `route groups` v App Routeru?
- [x] K logickému seskupení segmentů bez vlivu na výslednou URL strukturu.
- [ ] K definici API rate limit skupin.
- [ ] K vytvoření CSS namespace.
- [ ] Jen ke generování sitemap.

### Co je hlavní přínos streaming renderingu?
- [x] Část UI lze posílat klientovi postupně, takže uživatel vidí obsah dříve.
- [ ] Zajistí, že všechny requesty doběhnou paralelně bez chyb.
- [ ] Nahradí potřebu loading UI.
- [ ] Funguje pouze s Pages Routerem.

### Jaký je rozdíl mezi Pages Routerem a App Routerem?
- [x] App Router staví na novějším modelu segmentů, layoutů a server components, zatímco Pages Router používá starší `pages/` přístup.
- [ ] Pages Router funguje jen na serveru a App Router jen v browseru.
- [ ] Pages Router nepodporuje dynamické routy.
- [ ] App Router neumí metadata.

### Kdy dává smysl použít `useSearchParams`?
- [x] Když v client komponentě potřebujeme číst query parametry URL.
- [ ] Když chceme na serveru zapisovat env proměnné.
- [ ] Když chceme generovat statické parametry při buildu.
- [ ] Pouze pro route handlers.

### Co je důležité při práci s cookies v serverové části Next.js?
- [x] Uvědomit si, že přístup ke cookie může ovlivnit cachování a dynamic rendering chování.
- [ ] Cookies lze číst jen v client komponentě.
- [ ] Cookies se vždy ignorují při SSR.
- [ ] Next cookies automaticky ukládá do localStorage.

### Proč může být nevhodné tahat celý databázový klient do client komponenty?
- [x] Protože client bundle má běžet v browseru a nemá obsahovat serverové tajné přístupy ani zbytečný kód.
- [ ] Protože client komponenty neumí importovat JavaScript.
- [ ] Protože databázový klient musí být vždy v CSS modulu.
- [ ] Jen kvůli tomu, že TypeScript nepodporuje class.

### Co je hlavní role `next/font`?
- [x] Optimalizované načítání fontů s lepší kontrolou nad performance a layout stabilitou.
- [ ] Převod fontů do SVG ikon.
- [ ] Nastavení fallback rout pro chybějící fonty.
- [ ] Nástroj pro generování Open Graph obrázků.

### K čemu slouží `generateViewport` nebo metadata viewportu?
- [x] K deklaraci informací o viewportu a souvisejících metadat pro stránku.
- [ ] K získání aktuální šířky browser okna v server componentě.
- [ ] K definici breakpoints pro CSS.
- [ ] Jen k SSR cachování.

### Co je častý anti-pattern při data fetchingu v Next.js?
- [x] Zbytečně přesouvat data fetching do klienta, i když mohou být levněji a bezpečněji načtena na serveru.
- [ ] Použít `await` v server komponentě.
- [ ] Rozdělit layout a stránku do více souborů.
- [ ] Použít route handler pro API logiku.

### Jaký je přínos colocace dat a UI v server komponentě?
- [x] Komponenta může sama získat data blízko místa použití bez nadbytečného prop drillingu přes několik vrstev.
- [ ] Znamená to, že komponentu už nelze testovat.
- [ ] Funguje to jen u client komponent.
- [ ] Vyžaduje to vždy Redux store.

### Kdy použít client component i v aplikaci s App Routerem?
- [x] Když potřebujeme interaktivitu v browseru, lokální stav, event handlery nebo browser-only API.
- [ ] Když stránka obsahuje textový obsah.
- [ ] Když chceme snížit velikost bundle.
- [ ] Když potřebujeme route handler.

### Co je hlavní trade-off ISR?
- [x] Kombinuje rychlost statického obsahu s potřebou řešit, kdy a jak často se má obsah obnovovat.
- [ ] ISR znamená, že obsah už nikdy nezastará.
- [ ] ISR lze použít jen pro klientské komponenty.
- [ ] ISR vždy nahrazuje potřebu databáze.

### Proč je důležité rozumět boundary mezi server a client komponentami?
- [x] Ovlivňuje to velikost bundle, dostupnost API, způsob data fetchingu i bezpečnost práce se secrets.
- [ ] Jen kvůli pojmenování souborů.
- [ ] Protože jinak nefungují CSS moduly.
- [ ] Jde pouze o rozdíl v tom, kde se vykreslí `console.log`.

### Kdy dává smysl číst `searchParams` přímo na serverové stránce?
- [x] Když potřebujeme odvodit serverový výstup nebo data fetching z query parametrů bez nutnosti klientské hydratace.
- [ ] Jen když chceme přidat click handler na tlačítko.
- [ ] Pouze v middleware.
- [ ] Serverová stránka query parametry nevidí.

## Frontend Testing

### Jaký je rozdíl mezi unit a integration testem?
- [x] Unit test ověřuje malý izolovaný kus logiky, integration test spolupráci více částí dohromady.
- [ ] Unit test běží v browseru a integration test jen na serveru.
- [ ] Integration test je vždy pomalejší o řád.
- [ ] Mezi nimi není praktický rozdíl.

### Co je e2e test?
- [x] Test simulující chování uživatele přes celou aplikaci včetně skutečných nebo realisticky stubovaných integračních bodů.
- [ ] Test jediné utility funkce bez DOM.
- [ ] Jen screenshot test CSS.
- [ ] Typová kontrola při buildu.

### Co popisuje test pyramid?
- [x] Preferenci většího množství levnějších nižších testů a menšího množství dražších e2e testů.
- [ ] Povinnost psát jen e2e testy.
- [ ] Hierarchii CSS selektorů v testu.
- [ ] Sadu pravidel pro snapshoty.

### Proč jsou flaky testy problém?
- [x] Snižují důvěru v test suite a ztěžují rozlišení skutečných regresí od náhodných selhání.
- [ ] Znamenají, že test pokrývá příliš mnoho edge cases.
- [ ] Jsou výhodné pro chaos engineering.
- [ ] Flaky testy jsou problém jen lokálně, ne v CI.

### Co je dobrá vlastnost kvalitního testu?
- [x] Je čitelný, deterministický a ověřuje uživatelsky nebo business relevantní chování.
- [ ] Obsahuje co nejvíc `setTimeout`.
- [ ] Testuje interní implementační detail každé řádky.
- [ ] Spouští celý stack i pro triviální pure function.

### Proč bývá lepší testovat chování než implementační detail?
- [x] Test je pak odolnější vůči refactoru, pokud se nezmění skutečné chování systému.
- [ ] Implementační detail nelze v JS nikdy ověřit.
- [ ] Browser neumí číst DOM.
- [ ] Jen kvůli tomu, že snapshot testy jsou zakázané.

### K čemu slouží mocking?
- [x] K nahrazení závislostí kontrolovanými doubles, aby byl test izolovanější a predikovatelnější.
- [ ] K automatickému generování produkčního API.
- [ ] K nahrazení všech integration testů.
- [ ] Jen k testování CSS modulů.

### Kdy může být nadměrný mocking škodlivý?
- [x] Když testujeme spíš mock implementaci než reálné chování a ztrácíme důvěru v integraci částí systému.
- [ ] Když mockujeme síťové volání v unit testu.
- [ ] Když používáme stub data.
- [ ] Mocking není škodlivý nikdy.

### Co je stub?
- [x] Test double vracející předem připravené odpovědi bez nutnosti plného chování originální závislosti.
- [ ] Test sledující, kolikrát byla funkce zavolána.
- [ ] Nástroj pro měření coverage.
- [ ] Pouze snapshot HTML stránky.

### Co je spy?
- [x] Obal nebo záznam nad funkcí umožňující ověřit, jak byla volaná.
- [ ] Náhrada za HTTP server.
- [ ] Typ CSS selektoru v testu.
- [ ] Funkce pro paralelní spuštění browserů.

### K čemu slouží fake timer?
- [x] K řízení času v testu bez čekání na skutečné timeouty nebo intervaly.
- [ ] K vytváření výkonnostních benchmarků produkce.
- [ ] K náhradě Promise API.
- [ ] Jen pro e2e testy.

### Co je accessibility query v komponentových testech?
- [x] Výběr prvku podle role, labelu nebo textového významu blízký tomu, jak uživatel UI vnímá.
- [ ] Výběr prvku výhradně podle `.class-name`.
- [ ] Přístup jen pro screen readery, ne pro testy.
- [ ] Query, které funguje pouze v Safari.

### Proč bývá `getByRole` často preferovaný selector?
- [x] Testuje UI z pohledu uživatelské sémantiky a obvykle vede k odolnějším testům.
- [ ] Je vždy rychlejší než všechny jiné query.
- [ ] Funguje i bez renderování DOM.
- [ ] Umí vybrat libovolný element bez role.

### Kdy může být selector přes `.class` křehký?
- [x] Když se třídy mění kvůli refactoru nebo stylům, aniž by se změnilo skutečné chování UI.
- [ ] Nikdy, class je nejstabilnější kontrakt aplikace.
- [ ] Jen při použití Tailwindu.
- [ ] Jen když test běží v CI.

### Co je síla testování formuláře přes uživatelské interakce?
- [x] Ověřuje reálný tok zadávání hodnot, validace a submitu podobně jako to dělá uživatel.
- [ ] Umožní obejít potřebu renderovat komponentu.
- [ ] Funguje jen pro uncontrolled inputy.
- [ ] Nahrazuje unit test validační logiky.

### Proč je důležité čekat na asynchronní změny správným způsobem?
- [x] Aby test nebyl race-condition dependent a neselhával náhodně podle rychlosti prostředí.
- [ ] Protože async kód v testech nelze ověřit.
- [ ] Jen kvůli tomu, aby coverage byla vyšší.
- [ ] Všechny asynchronní změny se projeví synchronně po clicku.

### K čemu slouží `waitFor` nebo podobné utility?
- [x] K opakovanému ověřování podmínky do chvíle, než se splní nebo timeoutne.
- [ ] K vytvoření snapshotu DOM.
- [ ] K mockování HTTP requestů.
- [ ] K nastavení fake timerů.

### Co je network stub v e2e testu?
- [x] Náhrada skutečné síťové odpovědi kontrolovaným výsledkem, aby byl test determinističtější.
- [ ] Logika produkčního backendu.
- [ ] Automatický retry neúspěšného requestu.
- [ ] Jen browser cache response.

### Kdy je lepší použít skutečný backend místo stubu?
- [x] Když chceme ověřit reálnou integraci, kontrakty a chování celého flow end-to-end.
- [ ] Nikdy, backend se v testech nepoužívá.
- [ ] Jen pro CSS vizuální regresi.
- [ ] Pouze při testování utility funkcí.

### Co je snapshot test?
- [x] Test porovnávající aktuální výstup s uloženým snapshotem.
- [ ] Výkonnostní profilování browseru.
- [ ] Test běžící jen nad produkčním bundlem.
- [ ] Typová kontrola komponenty.

### Kdy mohou být snapshot testy problematické?
- [x] Když zachytí příliš velký nebo špatně čitelný výstup a změny se pak reviewují bez pochopení dopadu.
- [ ] Když snapshot obsahuje text.
- [ ] Jen při použití TypeScriptu.
- [ ] Snapshot test nikdy nemůže přinést hodnotu.

### Co je visual regression test?
- [x] Test porovnávající vzhled UI, často přes screenshoty nebo pixel diff.
- [ ] Test validující pouze response status kód API.
- [ ] Unit test pro CSS parser.
- [ ] Integrační test databáze.

### Jaký je přínos testování přístupnosti?
- [x] Pomáhá odhalit problémy v sémantice, fokusu, labelech nebo kontrastu ještě před produkcí.
- [ ] Nahrazuje všechny manuální UX testy.
- [ ] Je relevantní jen pro státní weby.
- [ ] Týká se pouze backend API.

### Co je hlavní rozdíl mezi smoke a regression testem?
- [x] Smoke test rychle ověřuje základní průchodnost systému, regression test hlouběji pokrývá, že nic dříve funkčního se nerozbilo.
- [ ] Regression test je vždy kratší než smoke test.
- [ ] Smoke test je jen pro backend.
- [ ] Mezi nimi není rozdíl.

### Proč je důležité testy izolovat od sdíleného stavu?
- [x] Aby se navzájem neovlivňovaly a jejich výsledek nezávisel na pořadí spuštění.
- [ ] Jen kvůli menšímu bundle size.
- [ ] Protože sdílený stav nelze v testech vytvořit.
- [ ] Izolace je nutná jen u e2e testů.

### Co je test fixture?
- [x] Předpřipravená sada dat nebo prostředí používaná opakovaně v testech.
- [ ] Produkční seed databáze.
- [ ] Výstup coverage reportu.
- [ ] CSS reset soubor.

### Jaký je přínos page object pattern v e2e testech?
- [x] Zapouzdří opakující se interakce a selektory, čímž zlepšuje údržbu testů.
- [ ] Nahrazuje potřebu assertions.
- [ ] Funguje jen v Selenium.
- [ ] Je určen pouze pro snapshot testy.

### Proč není dobré spoléhat v e2e testech na pevné `sleep`?
- [x] Testy jsou pomalejší a náchylnější k flaky chování než při čekání na skutečnou podmínku.
- [ ] Protože browser neumí čekat.
- [ ] Sleep je zakázaný pouze v CI.
- [ ] Sleep vždy způsobí memory leak.

### Co je coverage report?
- [x] Přehled o tom, jaká část kódu byla během testů vykonána.
- [ ] Přesný důkaz, že aplikace nemá bugy.
- [ ] Nástroj pro mockování HTTP.
- [ ] Jen seznam neúspěšných testů.

### Proč samotná vysoká coverage nestačí?
- [x] Kód může být vykonaný, ale bez kvalitních assertions a bez pokrytí důležitého chování.
- [ ] Protože coverage je vždy škodlivá metrika.
- [ ] Vysoká coverage znamená, že testů je příliš málo.
- [ ] Coverage nelze měřit u frontendu.

### Co je contract testing v integracích?
- [x] Ověření, že komunikující systémy dodržují očekávaný tvar a význam rozhraní.
- [ ] Test layoutu podle design tokenů.
- [ ] Snapshot route konfigurace.
- [ ] Jednotkový test CSS modulů.

### Kdy je vhodné testovat custom hook nebo composable izolovaně?
- [x] Když obsahuje netriviální logiku, kterou chceme ověřit mimo konkrétní prezentační komponentu.
- [ ] Nikdy, hooky se testovat nedají.
- [ ] Jen v e2e testu přes browser.
- [ ] Pouze pokud hook pracuje se CSS.

### Co je dobrý přístup k testování error state UI?
- [x] Explicitně nasimulovat chybový scénář a ověřit, jaké sdělení nebo fallback uživatel uvidí.
- [ ] Error stavy netestovat, protože jsou vzácné.
- [ ] Ověřit jen HTTP status bez renderu UI.
- [ ] Použít snapshot bez assertions.

### Proč testovat loading state?
- [x] Protože uživatel loading vidí a jeho správné zobrazení či skrytí je součástí funkčního chování.
- [ ] Loading state se ve frontendu nikdy nevykresluje.
- [ ] Jen kvůli coverage.
- [ ] Loading lze testovat pouze manuálně.

### Co je fake backend nebo mock server v testech?
- [x] Kontrolované serverové prostředí vracející očekávané odpovědi pro test scénářů.
- [ ] Produkční backend spuštěný v read-only režimu.
- [ ] Jen statický JSON soubor bez HTTP vrstvy.
- [ ] Browser plugin pro zvýraznění chyb.

### K čemu slouží test runner?
- [x] K objevování, spouštění a reportování výsledků testů.
- [ ] K vykreslení aplikace v produkci.
- [ ] K definici TypeScript typů.
- [ ] K transformaci CSS do JavaScriptu.

### Co je assertion?
- [x] Ověření očekávaného výsledku testu.
- [ ] Každé vykreslení komponenty.
- [ ] Mock databázové odpovědi.
- [ ] Struktura CI pipeline.

### Proč může být příliš široký integrační test drahý na údržbu?
- [x] Má více závislostí, více důvodů selhání a hůř se v něm hledá příčina problému.
- [ ] Protože integrační testy nesmí mít assertions.
- [ ] Protože browser neumí renderovat více komponent.
- [ ] Široké integrační testy jsou vždy lepší než menší testy.

### Co je role CI při testování?
- [x] Automaticky spouštět testy nad změnami a bránit regresím před nasazením.
- [ ] Nahrazuje veškerý lokální vývoj.
- [ ] Slouží jen ke generování screenshotů.
- [ ] CI pipeline nemusí obsahovat testy.

### Proč je dobré mít rychlé testy blízko kódu?
- [x] Zrychlují feedback loop a usnadňují bezpečný refactor během vývoje.
- [ ] Jen kvůli menšímu počtu souborů v repozitáři.
- [ ] Rychlé testy jsou potřeba jen na backendu.
- [ ] Protože pomalé testy nelze spouštět v CI.

### K čemu slouží test doubles obecně?
- [x] K nahrazení nebo sledování chování externích závislostí v testu.
- [ ] K duplikaci produkčních dat do dvou databází.
- [ ] K zajištění vyšší FPS v browseru.
- [ ] Pouze k testování CSS transformací.

### Co je hlavní výhoda explicitních testovacích dat oproti náhodně generovaným bez kontroly?
- [x] Lépe se z nich čte záměr testu a snáz se reprodukují selhání.
- [ ] Náhodná data se nemohou v testech používat nikdy.
- [ ] Explicitní data vždy pokryjí více edge cases.
- [ ] Náhodná data jsou vhodná jen pro load testing.

### Proč je dobré oddělit testy na úrovni logiky, komponent a celých flow?
- [x] Každá vrstva má jinou cenu, rychlost a typ chyb, které umí efektivně odhalit.
- [ ] Protože test runner neumí spustit více typů testů v jednom projektu.
- [ ] Jen kvůli coverage reportu.
- [ ] Všechny chyby lze stejně najít pouze e2e testem.

### Co je anti-pattern při testování komponenty?
- [x] Příliš silná vazba testu na interní strukturu implementace místo uživatelsky pozorovatelného chování.
- [ ] Ověření textu tlačítka podle role.
- [ ] Mocknutí HTTP requestu v unit testu.
- [ ] Použití fixture dat.

### Kdy dává smysl použít `data-testid`?
- [x] Když sémantický selector není praktický nebo dostupný, ale chceme stále stabilní testovací kontrakt.
- [ ] Vždy místo role nebo label query.
- [ ] Pouze v e2e testech, nikdy v komponentových.
- [ ] Jen pro CSS screenshot testy.

### Proč je důležitý cleanup mezi testy?
- [x] Brání únikům stavu, DOM nebo mocků mezi scénáři a zvyšuje determinismus testů.
- [ ] Jen kvůli menší velikosti snapshotu.
- [ ] Protože jinak test runner odmítne spustit další soubor.
- [ ] Cleanup je nutný jen u pure funkcí.

### Kdy je vhodné mockovat browser API jako `IntersectionObserver` nebo `ResizeObserver`?
- [x] Když testované prostředí API neposkytuje nebo chceme deterministicky řídit jejich chování v testu.
- [ ] Nikdy, browser API se v testech nemockují.
- [ ] Jen při testování backendu.
- [ ] Pouze v produkčním buildu.

### Co je test data builder pattern?
- [x] Způsob tvorby testovacích dat přes čitelné továrny nebo buildery s rozumnými defaulty a snadnými overridy.
- [ ] Mechanismus pro build frontend bundle.
- [ ] Snapshot celého API kontraktu.
- [ ] CSS utility třída pro fixture data.

### Proč je opatrnost s retry v CI důležitá?
- [x] Retry může maskovat flaky testy místo toho, aby řešil skutečnou příčinu nestability.
- [ ] Retry vždy zaručí, že test není flaky.
- [ ] Retry lze použít jen u unit testů.
- [ ] Retry zrychluje všechny pipeline.

### Co je smysl testu zaměřeného na kritický user journey?
- [x] Ověřit klíčové obchodní flow, jehož rozbití by mělo vysoký dopad na uživatele nebo byznys.
- [ ] Testovat v něm všechny utility funkce v projektu.
- [ ] Nahradit jím veškeré unit testy.
- [ ] Používat ho jen při vizuální regresi.

## State Management

### Co je hlavní rozdíl mezi local a shared state?
- [x] Local state je omezený na konkrétní komponentu nebo malý podstrom, shared state je potřeba na více místech aplikace.
- [ ] Shared state lze používat jen na serveru.
- [ ] Local state se neukládá v paměti.
- [ ] Mezi nimi není rozdíl.

### Kdy dává smysl liftovat state výš?
- [x] Když stejná data potřebuje více sibling komponent a je potřeba je synchronizovat.
- [ ] Když chceme zmenšit počet props v jediné komponentě.
- [ ] Jen když používáme Redux.
- [ ] Vždy, jakmile komponenta obsahuje useState.

### Co je derived state?
- [x] Hodnota odvozená z jiného stavu nebo dat, kterou často není nutné držet jako samostatný zdroj pravdy.
- [ ] Stav uložený pouze v URL.
- [ ] Výsledek HTTP requestu bez cache.
- [ ] Libovolná hodnota v localStorage.

### Proč bývá špatné duplikovat stejná data do více stavových míst?
- [x] Zvyšuje to riziko nekonzistence a složitější synchronizace updateů.
- [ ] Protože frontend neumí ukládat stejná data dvakrát.
- [ ] Jen kvůli velikosti bundle.
- [ ] Duplicitní stav je vždy rychlejší.

### Kdy je Context dostačující a není nutné sahat po store knihovně?
- [x] Když sdílíme relativně jednoduchá data nebo services bez složitých update pravidel a debug potřeb.
- [ ] Nikdy, Context se pro state nepoužívá.
- [ ] Jen pokud aplikace nemá router.
- [ ] Pouze pro formuláře.

### Jaké je riziko používání Contextu jako univerzálního globálního storu?
- [x] Může vést k nechtěným rerenderům a ke složitěji udržovatelné architektuře bez jasných hranic odpovědností.
- [ ] Context automaticky vypne memoizaci komponent.
- [ ] Context nefunguje s TypeScriptem.
- [ ] Context je vždy rychlejší než dedikovaný store.

### Co je hlavní myšlenka reducer patternu?
- [x] Změny stavu se popisují explicitními akcemi a čistou funkcí, která z předchozího stavu vytvoří nový.
- [ ] Reducer přímo mutuje DOM a props.
- [ ] Reducer je jen jiný název pro API client.
- [ ] Reducer funguje pouze na serveru.

### Proč je imutabilita užitečná při správě stavu?
- [x] Ulehčuje porovnávání změn, debugování a předvídatelné update flow.
- [ ] Zajišťuje automatické šifrování dat.
- [ ] Vynucuje synchronní render.
- [ ] Je povinná jen v Angularu.

### Co je selector ve state managementu?
- [x] Funkce vybírající nebo odvozující konkrétní část stavu pro spotřebitele.
- [ ] Event handler pro změnu stavu.
- [ ] API endpoint pro načtení store.
- [ ] CSS selektor z template.

### Proč má smysl memoizovat selectory nebo derived data?
- [x] Aby se drahé přepočty neopakovaly zbytečně, pokud se relevantní vstupy nezměnily.
- [ ] Protože memoizace vždy řeší všechny performance problémy.
- [ ] Jen kvůli menšímu bundle.
- [ ] Derived data nelze počítat bez memoizace.

### Co je normalizace stavu?
- [x] Uložení dat do struktury bez zbytečných duplicit, často podle ID map a seznamů referencí.
- [ ] Převod všech hodnot na string.
- [ ] Reset stavu po každém renderu.
- [ ] Uložení všeho do jednoho velkého objektu bez struktury.

### Kdy je normalizace přínosná?
- [x] U komplexnějších propojených dat, kde by denormalizace vedla k duplicitám a složitým updateům.
- [ ] U jediného boolean flagem v komponentě.
- [ ] Jen při použití Pinie.
- [ ] Pouze v backend databázi, nikdy ve frontendu.

### Co je server state?
- [x] Data pocházející ze serveru, která mají vlastní lifecycle, cache a synchronizaci oddělenou od čistě lokálního UI stavu.
- [ ] Jakýkoli stav držený v Node procesu při SSR.
- [ ] Stav uložený pouze v cookies.
- [ ] To samé co theme state.

### Proč je užitečné rozlišovat server state a client/UI state?
- [x] Mají jiné potřeby ohledně cachování, invalidace, persistence i ownership logiky.
- [ ] Protože se jinak TypeScript nepřeloží.
- [ ] Jen kvůli názvům souborů.
- [ ] Ve skutečnosti jde vždy o stejný typ dat.

### Co je cache invalidation ve state layeru?
- [x] Rozhodnutí, kdy data považujeme za zastaralá a je potřeba je znovu načíst nebo přepočítat.
- [ ] Vymazání localStorage při refreshi.
- [ ] Převod immutable stavu na mutable.
- [ ] Nastavení `z-index` pro overlay komponentu.

### Kdy může optimistic update zlepšit UX?
- [x] Když uživatel vidí očekávanou změnu hned a případný rollback při chybě je zvládnutelný.
- [ ] Když backend vrací výsledek do několika mikrosekund.
- [ ] Jen u read-only operací.
- [ ] Optimistic update není nikdy vhodný.

### Co je rollback při optimistic update?
- [x] Vrácení UI nebo store do předchozího stavu, pokud server mutaci nepotvrdí.
- [ ] Uložení nového stavu do persistent storage.
- [ ] Přepnutí z Reduxu na Zustand.
- [ ] Route přesměrování po každém submitu.

### Kdy je vhodné perzistovat část stavu do localStorage?
- [x] U preferencí nebo dat, která mají přežít reload a nejsou citlivá ani vysoce konfliktní.
- [ ] U přístupových tokenů bez dalších bezpečnostních úvah vždy.
- [ ] U každého dočasného hover stavu.
- [ ] Jen pokud používáme Redux Toolkit.

### Co je riziko ukládání příliš velkého množství stavu do localStorage?
- [x] Zastaralá data, migrační problémy, bezpečnostní rizika a složitější synchronizace mezi taby.
- [ ] Browser pak zakáže CSS.
- [ ] localStorage je neomezené.
- [ ] Údaje v localStorage jsou automaticky šifrované.

### Jaký je přínos devtools u store knihoven?
- [x] Usnadňují inspekci změn stavu, akčních toků a ladění problematických updateů.
- [ ] Nahrazují potřebu logování a testů.
- [ ] Fungují jen v produkci.
- [ ] Umožňují změnit typy v TypeScriptu za běhu.

### K čemu je dobrý Redux reducer bez side efektů?
- [x] Je predikovatelný, snadno testovatelný a nezávislý na vnějším prostředí.
- [ ] Je díky tomu automaticky asynchronní.
- [ ] Může přímo volat API bez middleware.
- [ ] Vyžaduje menší počet akcí.

### Co je middleware v Redux-like architektuře?
- [x] Vrstva mezi dispatch a reducerem pro side efekty, logging, async logiku nebo transformaci akcí.
- [ ] CSS vrstva mezi komponentami.
- [ ] Typ selectoru pro store.
- [ ] Mechanismus pro SSR layout.

### Jaký je přínos Redux Toolkit oproti „ručnímu“ Reduxu?
- [x] Méně boilerplate, bezpečnější patterns a pohodlnější práce s reducermi, akcemi i async logikou.
- [ ] Vypíná potřebu reducerů.
- [ ] Funguje pouze bez TypeScriptu.
- [ ] Nahrazuje React Router.

### Co je hlavní charakteristika Zustand přístupu?
- [x] Lehčí store API s menším boilerplate, často založené na hook-based přístupu.
- [ ] Povinné používání reducerů a action typů jako string konstant.
- [ ] Store dostupný jen ve Vue.
- [ ] Nativní cache HTTP klient pro server state.

### Co je hlavní charakteristika Pinie?
- [x] Moderní store řešení pro Vue s jednoduchým API, dobrou typovostí a integrací do Vue ekosystému.
- [ ] Redux wrapper pro Angular.
- [ ] Nástroj pro vizuální snapshot testy.
- [ ] Jen CSS theming vrstva.

### Co byl historický use-case Vuex?
- [x] Centrální store pro sdílený stav ve Vue aplikacích před nástupem Pinie jako doporučenější volby.
- [ ] Router pro Vue aplikace.
- [ ] Build tool pro single-file komponenty.
- [ ] CSS preprocessor pro Vue.

### Kdy může být globální store overkill?
- [x] Když řešíme jednoduchý stav lokální jedné komponentě nebo malé části stromu.
- [ ] Když aplikace obsahuje víc než tři stránky.
- [ ] Když používáme TypeScript.
- [ ] Nikdy, globální store je vždy správná volba.

### Co je ownership stavu?
- [x] Rozhodnutí, která vrstva nebo komponenta je zdrojem pravdy pro konkrétní data.
- [ ] Pouze jméno maintainer týmu v repozitáři.
- [ ] Počet subscriberů na store.
- [ ] Mechanismus pro šifrování stavu.

### Proč je důležité mít jasný zdroj pravdy?
- [x] Zabraňuje konfliktům mezi více kopiemi stejného stavu a usnadňuje reasoning o updatech.
- [ ] Jen kvůli coverage reportu.
- [ ] Jinak nelze použít React Context.
- [ ] Zdroj pravdy je relevantní jen pro databázi.

### K čemu slouží action ve store architektuře?
- [x] Popisuje úmysl změnit stav nebo spustit určité workflow.
- [ ] Ukládá DOM uzel do cache.
- [ ] Slouží jen pro CSS animace.
- [ ] Nahrazuje selector.

### Co je anti-pattern při práci s globálním stavem?
- [x] Ukládat do něj všechno bez rozlišení, včetně čistě lokálních a krátkodobých UI detailů.
- [ ] Mít selektory pro odvozená data.
- [ ] Testovat reducery izolovaně.
- [ ] Držet theme preference mimo URL.

### Proč může být nested mutable state problém?
- [x] Hůř se sledují změny, roste riziko nechtěné mutace a složitějšího debugování.
- [ ] Protože JavaScript neumí vnořené objekty.
- [ ] Protože nested state nelze serializovat.
- [ ] Jen kvůli CSS-in-JS.

### Kdy má smysl stav reprezentovat state machine přístupem?
- [x] Když má proces jasné stavy a přechody, například loading, success, error, retry, a chceme explicitní model.
- [ ] Když ukládáme barvu tlačítka při hoveru.
- [ ] Jen pokud používáme Angular.
- [ ] State machine je nutná pro každý formulář.

### Co je přínos explicitních status flagů nebo state machine pro async flow?
- [x] Zvyšují čitelnost a snižují počet nevalidních kombinací stavů.
- [ ] Vždy zrychlí síťové requesty.
- [ ] Nahrazují potřebu error handlingu.
- [ ] Slouží jen pro backend.

### Proč je důležité řešit race conditions při async updatech stavu?
- [x] Pozdější příchod starší odpovědi může přepsat novější relevantní data a rozbít konzistenci UI.
- [ ] Race conditions existují jen v multithread aplikacích.
- [ ] Protože async update stav nemůže měnit.
- [ ] Jen kvůli layout shiftům.

### Co může pomoci omezit zbytečné rerendery při odběru store?
- [x] Selektivní subscription, memoizované selectory a rozumné dělení stavu podle odpovědností.
- [ ] Uložit celý store do jedné string proměnné.
- [ ] Vypnout všechny subscriptions.
- [ ] Používat pouze deep equals nad celým storem pokaždé.

### Kdy je vhodné mít více menších store modulů místo jednoho velkého?
- [x] Když chceme jasnější hranice domén, lepší ownership a menší coupling mezi částmi aplikace.
- [ ] Jen pokud framework nepodporuje jeden store.
- [ ] Nikdy, jeden velký store je vždy lepší.
- [ ] Jen pro testovací prostředí.

### Co je selector invalidation problém?
- [x] Odvozená data nebo subscription se přepočítávají častěji, než je nutné, protože závislosti nejsou dobře ohraničené.
- [ ] Selector přestane vracet hodnotu typu string.
- [ ] Selector změní store na readonly.
- [ ] Vzniká pouze v CSS selektorech.

### Jaký je přínos time-travel debugingu?
- [x] Umožňuje procházet historii změn stavu a analyzovat, kdy se systém dostal do chybného stavu.
- [ ] Automaticky vrací produkční data do minulosti.
- [ ] Funguje jen v backend log managementu.
- [ ] Nahrazuje potřebu unit testů.

### Kdy může být vhodné držet část stavu v URL?
- [x] Když má stav reprezentovat sdílitelný nebo bookmarkovatelný pohled, například filtry, stránkování nebo sort.
- [ ] Když jde o citlivý token.
- [ ] Když chceme skrýt stav před uživatelem.
- [ ] Jen při použití Next.js middleware.

### Co je trade-off držení filtru v URL oproti lokálnímu stavu?
- [x] Lepší sdílení a obnovitelnost stavu za cenu větší synchronizační a navigační complexity.
- [ ] URL stav je vždy jednodušší a bez nevýhod.
- [ ] Lokální stav nelze pro filtry použít.
- [ ] URL se při změně query nemůže měnit bez reloadu.

### Co je hlavní role invalidace cache po mutaci server state?
- [x] Zajistit, aby UI po změně dat znovu načetlo nebo přepočítalo zastaralé informace.
- [ ] Vymazat všechny CSS classy ze stránky.
- [ ] Vynutit remount celé aplikace.
- [ ] Jen uložit poslední akci do localStorage.

### Jaký je dobrý přístup k testování reducerů nebo store akcí?
- [x] Ověřovat vstupní stav, akci a očekávaný výsledný stav izolovaně a deterministicky.
- [ ] Testovat je výhradně přes e2e browser flow.
- [ ] Nikdy je netestovat, protože jsou to jen detail implementace.
- [ ] Validovat pouze TypeScript typy bez assertions.

### Proč je dobré oddělit doménový stav od čistě prezentačního UI stavu?
- [x] Každý typ stavu má jiné lifecycle, konzumenty a požadavky na persistence či sdílení.
- [ ] Protože UI stav nelze serializovat.
- [ ] Jen kvůli tomu, aby bylo méně souborů.
- [ ] Doménový a UI stav jsou vždy totéž.

### Co je hlavní signál, že architektura stavu potřebuje refactor?
- [x] Časté nekonzistence dat, těžké debugování, nejasný source of truth a změny s vysokým rizikem vedlejších efektů.
- [ ] Počet komponent přesáhne deset.
- [ ] Aplikace používá dark mode.
- [ ] Build trvá déle než minutu.

### Co je rehydratace persistovaného stavu?
- [x] Obnovení dříve uloženého stavu do runtime aplikace po reloadu nebo novém spuštění.
- [ ] Vymazání všech cache po každé mutaci.
- [ ] Převod local state na server state.
- [ ] Renderování HTML na serveru.

### Proč může být nebezpečné persistovat celý store bez filtrace?
- [x] Můžeme ukládat zbytečná, citlivá nebo rychle zastarávající data a zkomplikovat migrace mezi verzemi.
- [ ] Protože browser neumí uložit objekty.
- [ ] Persistovat lze jen stringy a nic jiného.
- [ ] Persistovaný store se nikdy nenačte zpět.

### Co je stale state problém?
- [x] UI nebo logika pracuje se starou verzí dat, která už neodpovídá aktuálnímu zdroji pravdy.
- [ ] Stav, kdy store obsahuje příliš mnoho booleanů.
- [ ] Situace, kdy TypeScript nezná typ proměnné.
- [ ] Název pro memory leak v CSS-in-JS.

### Kdy dává smysl použít transient UI state mimo globální store?
- [x] U krátkodobých detailů jako otevření dropdownu, hover nebo lokální editace, které nepotřebují sdílení napříč aplikací.
- [ ] Když chceme sdílet data mezi mnoha nesouvisejícími stránkami.
- [ ] Když jde o výsledek backend dotazu s cache politikou.
- [ ] Vždy, i pro autentizační stav celé aplikace.

### Co je hlavní přínos jasně definovaných write path do store?
- [x] Změny stavu jsou lépe dohledatelné, auditovatelné a méně náchylné k nekontrolovaným side efektům.
- [ ] Store díky tomu nepotřebuje selektory.
- [ ] Zabrání to potřebě invalidace cache.
- [ ] Umožní přímo mutovat state odkudkoli bez rizika.
