(import "./id.mu" id)

id
(id (Pi ([A Type]) (-> A A)) id)

((id (Pi ([A Type]) (-> A A)) id)
 (Pi ([A Type]) (-> A A))
 (id (Pi ([A Type]) (-> A A)) id))
