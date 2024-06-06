import { UserPlayer } from '@/entities/user-player'

interface DialogDescriptionProps {
  selectedMatch: UserPlayer
}

export function DialogDescriptionMatch({
  selectedMatch,
}: DialogDescriptionProps) {
  return (
    <div>
      {selectedMatch ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Jogador</th>
                <th>Champion</th>
                <th>Venceu a partida</th>
                <th>Farm</th>
                <th>Ouro Ganho</th>
                <th>Ouro Gasto</th>
                <th>Dano Total Causado</th>
                <th>Dano aos Campeões</th>
                <th>Dano Total Recebido</th>
                <th>Cura Total</th>
                <th>Pontuação de Visão</th>
                <th>Sentinelas Colocadas</th>
                <th>Sentinelas Destruidas</th>
                <th>Mortes</th>
                <th>Abates</th>
                <th>Rota</th>
                <th>Função</th>
                <th>Itens</th>
              </tr>
            </thead>
            <tbody>
              {selectedMatch.players.map((player, index) => (
                <tr key={index}>
                  <td>{player.userName}</td>
                  <td>{player.championName}</td>
                  <td>{player.wonMatch ? 'Sim' : 'Não'}</td>
                  <td>{player.farm}</td>
                  <td>{player.goldEarned}</td>
                  <td>{player.goldSpent}</td>
                  <td>{player.totalDamageDealt}</td>
                  <td>{player.totalDamageDealtToChampions}</td>
                  <td>{player.totalDamageTaken}</td>
                  <td>{player.totalHeal}</td>
                  <td>{player.visionScore}</td>
                  <td>{player.wardsPlaced}</td>
                  <td>{player.wardsKilled}</td>
                  <td>{player.deaths}</td>
                  <td>{player.kills}</td>
                  <td>{player.lane}</td>
                  <td>{player.role}</td>
                  <td>
                    <ul>
                      {player.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <img src={item.itemImageURL} alt={item.itemName} />
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  )
}
