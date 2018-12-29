function songDecoder(song){
    // ...
    const result = []
    const decoder = song.split('WUB').map( (a,i) => {
        if (a != ''){
            result.push(a)
        }
    })
    return result.join(' ')
  }

  console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))