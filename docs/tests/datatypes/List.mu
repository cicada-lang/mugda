(data List (Pi ([+ A Type]) Type)
  [null (Pi ([A Type]) (List A))]
  [cons (Pi ([A Type]) (-> A (List A) (List A)))])
