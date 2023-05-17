
# Github Blog

Um site desenvolvido utilizando a API do github. Onde o mesmo lista as issues de um determinado repositório do meu perfil no Github.


## Funcionalidades

- Listagem do seu perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.
- Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela
- Criar uma página para exibir um post (issue) completo


## Stack utilizada

**Front-end:** React, react-router-dom, react-hook-form.


**Lib:** Axios, zod, date-fns, phosphor-react.
## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Cor white      | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| Cor title       | ![#E7EDF4](https://via.placeholder.com/10/E7EDF4?text=+) #E7EDF4 |
| Cor subtitle       | ![#C4D4E3](https://via.placeholder.com/10/C4D4E3?text=+) #C4D4E3 |
| Cor text      | ![#AFC2D4](https://via.placeholder.com/10/AFC2D4?text=+) #AFC2D4 |
| Cor span      | ![#7B96B2](https://via.placeholder.com/10/7B96B2?text=+) #7B96B2 |
| Cor label      | ![#3A536B](https://via.placeholder.com/10/3A536B?text=+) #3A536B |
| Cor border      | ![#1C2F41](https://via.placeholder.com/10/1C2F41?text=+) #1C2F41 |
| Cor post      | ![#112131](https://via.placeholder.com/10/112131?text=+) #112131 |
| Cor profile      | ![#0B1B2B](https://via.placeholder.com/10/0B1B2B?text=+) #0B1B2B |
| Cor background      | ![#071422](https://via.placeholder.com/10/071422?text=+) #071422 
| Cor input      | ![#040F1A](https://via.placeholder.com/10/040F1A?text=+) #040F1A |
| Cor blue      | ![#3294f8](https://via.placeholder.com/10/3294f8?text=+) #3294f8 |

## Memo()

A função memo() do React foi utilizada para otimizar o desempenho da aplicação. Ao memoizar um componente, ele evita renderizações desnecessárias toda vez que uma issue é chamada.

Ao memoizar um componente, o React armazena em cache o resultado da renderização desse componente. Quando o componente é chamado novamente com as mesmas propriedades, o React verifica o cache e, se as propriedades forem as mesmas, retorna o resultado armazenado em cache em vez de renderizar o componente novamente.

Essa abordagem é particularmente útil quando o componente possui cálculos complexos ou depende de dados que não mudam com frequência. Ao evitar renderizações repetidas, a função memo() ajuda a melhorar o desempenho geral da aplicação.

A utilização da função memo() do React é uma prática recomendada para componentes que possuem uma grande quantidade de atualizações ou são exibidos várias vezes na aplicação. Ao memoizar esses componentes, podemos evitar desperdício de recursos computacionais e garantir uma experiência mais fluida para o usuário.

Mas eu utilizei somente para mostrar meus aprendizados com o memo()!

Aqui está um exemplo de como a função memo() pode ser utilizada:


### Uso/Exemplos

```javascript
import { memo } from 'react'

function UserSummaryComponent() {
  return (<Component />...)
}

export const UserSummary = memo(UserSummaryComponent)
```


## Demonstração

### Listagem de resumo das issues
![BuscaDeIssue](https://github.com/ThomasDixini/GithubBlog/assets/83423919/ba3949f9-bec6-49a3-9ed7-adc5930da424)

### Página da Issue Completa
![PostCompleto](https://github.com/ThomasDixini/GithubBlog/assets/83423919/6ec16192-a6fd-4aaa-a679-a543ada35b85)
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/ThomasDixini/GithubBlog.git
```

Entre no diretório do projeto

```bash
  cd GithubBlog
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Suporte

Lembrando que a API do Github suporta apenas algumas requisições por minuto. Então ao fazer várias requisições, pode ser que você se depare com o erro 403!


## Autores

![1635208190517](https://user-images.githubusercontent.com/83423919/226786783-03b03953-f231-4626-9ec8-b70a10a5a19d.jpg)
- [@Email - thomasdixini@gmail.com](https://www.gmail.com/thomasdixini)

## 🔗 Links
- [![linkedin](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thomas-dixini-011641220/)
- ![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white")

![Logo](https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png)

