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
- [x] DML (Data Manipulation Language) – SELECT, INSERT, UPDATE, DELETE
DDL (Data Definition Language) – CREATE, ALTER, DROP
DCL (Data Control Language) – GRANT, REVOKE
TCL (Transaction Control Language) – COMMIT, ROLLBACK, SAVEPOINT
- [ ] Pouze SELECT a INSERT
- [ ] Pouze CREATE a DROP
- [ ] N/A

### Jaký je rozdíl mezi INNER JOIN, LEFT JOIN, RIGHT JOIN a FULL JOIN?
- [x] INNER JOIN vrací pouze odpovídající záznamy z obou tabulek.
LEFT JOIN vrací všechny záznamy z levé tabulky a odpovídající záznamy z pravé.
RIGHT JOIN vrací všechny záznamy z pravé tabulky a odpovídající záznamy z levé.
FULL JOIN vrací všechny záznamy, pokud existuje shoda na jedné nebo druhé straně.
- [ ] Všechny JOIN typy jsou totéž
- [ ] JOIN operace nejsou v SQL podporovány
- [ ] N/A

### Jak funguje GROUP BY a HAVING?
- [x] GROUP BY seskupuje výsledky podle jednoho nebo více sloupců.
HAVING filtruje seskupené výsledky na základě agregačních funkcí.
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
- [x] UNION kombinuje výsledky dvou dotazů a odstraňuje duplikáty.
UNION ALL kombinuje výsledky bez odstranění duplikátů.
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
- [x] PRIMARY KEY jednoznačně identifikuje záznam v tabulce.
FOREIGN KEY je odkaz na primární klíč jiné tabulky.
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
- [x] TRUNCATE odstraní všechny záznamy bez možnosti rollbacku.
DELETE odstraní specifické řádky a lze ho vrátit zpět.
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
