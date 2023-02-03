-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03-Fev-2023 às 22:52
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `tradebooks`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `galery_books`
--

CREATE TABLE `galery_books` (
  `id` int(10) UNSIGNED NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `book_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `galery_books`
--

INSERT INTO `galery_books` (`id`, `image`, `book_id`) VALUES
(20, '/uploads/MariaIsa/book-1673107025452.jpeg', 13),
(21, '/uploads/MariaIsa/book-1673107286780.jpeg', 14),
(22, '/uploads/MariaIsa/book-1673107469867.jpeg', 15),
(23, '/uploads/MariaIsa/book-1673107627905.jpeg', 16),
(24, '/uploads/MariaIsa/book-1673107739294.jpeg', 17),
(25, '/uploads/MariaIsa/book-1673107886225.jpeg', 18),
(26, '/uploads/MariaIsa/book-1673108064356.jpeg', 19),
(27, '/uploads/MariaIsa/book-1673108064357.jpeg', 19),
(28, '/uploads/MariaIsa/book-1673108148310.jpeg', 20),
(29, '/uploads/MariaIsa/book-1673996825152.jpeg', 21),
(30, '/uploads/MariaIsa/book-1673996825188.jpeg', 21),
(31, '/uploads/MariaIsa/book-1673996825192.jpeg', 21);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_adress`
--

CREATE TABLE `tb_adress` (
  `ID` int(11) NOT NULL,
  `CEP` varchar(8) NOT NULL,
  `RUA` varchar(20) NOT NULL,
  `BAIRRO` varchar(50) NOT NULL,
  `CIDADE` varchar(50) NOT NULL,
  `ESTADO` varchar(50) NOT NULL,
  `COMPLEMENTO` varchar(100) DEFAULT NULL,
  `USERS_ID` int(11) NOT NULL,
  `NUMERO` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_adress`
--

INSERT INTO `tb_adress` (`ID`, `CEP`, `RUA`, `BAIRRO`, `CIDADE`, `ESTADO`, `COMPLEMENTO`, `USERS_ID`, `NUMERO`) VALUES
(15, '04651075', 'Travessa São Silvest', 'Vila São Paulo', 'São Paulo', 'SP', '', 1, 23),
(17, '11410-00', 'Avenida Puglisi - de', 'Pitangueiras', 'Guarujá', 'SP', '', 5, 65),
(18, '11410-00', 'Avenida Puglisi  - l', 'Pitangueiras', 'Guarujá', 'SP', '', 5, 95),
(20, '12.953-0', 'Avenida Campo Grande', 'Loteamento Pedra Bela', 'Atibaia', 'SP', '', 1, 60);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_books`
--

CREATE TABLE `tb_books` (
  `ID` int(11) NOT NULL,
  `TITLE_BOOK` varchar(100) NOT NULL,
  `PRICE` float(10,2) DEFAULT NULL,
  `DESCRIPTION_BOOK` varchar(255) NOT NULL,
  `CATEGORY` varchar(50) NOT NULL,
  `TIPO` varchar(10) NOT NULL,
  `QTDE` int(11) DEFAULT NULL,
  `USERS_ID` int(11) NOT NULL,
  `ACABAMENTO` varchar(20) DEFAULT NULL,
  `ANO_EDICAO` date DEFAULT NULL,
  `AUTOR` varchar(100) DEFAULT NULL,
  `EDITORA` varchar(100) DEFAULT NULL,
  `IDIOMA` varchar(25) DEFAULT NULL,
  `NUMERO_EDICAO` int(11) DEFAULT NULL,
  `NUMERO_PAGINAS` int(11) DEFAULT NULL,
  `condicao_book` varchar(50) DEFAULT NULL,
  `tipo_anuncio` varchar(50) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_books`
--

INSERT INTO `tb_books` (`ID`, `TITLE_BOOK`, `PRICE`, `DESCRIPTION_BOOK`, `CATEGORY`, `TIPO`, `QTDE`, `USERS_ID`, `ACABAMENTO`, `ANO_EDICAO`, `AUTOR`, `EDITORA`, `IDIOMA`, `NUMERO_EDICAO`, `NUMERO_PAGINAS`, `condicao_book`, `tipo_anuncio`, `image`) VALUES
(13, 'Mindset A nova psicologia do sucesso', 44.90, 'Carol S. Dweck, ph.D., professora de psicologia na Universidade Stanford e especialista internacional em sucesso e motivação, desenvolveu, ao longo de décadas de pesquisa, um conceito fundamental: a atitude mental com que encaramos a vida, que ela chama d', 'Psicologia', 'Impresso', 2, 1, ' Livro brochura (pap', '2017-01-01', 'Dweck, Carol S.', ' Editora Schwarcz SA', 'Português', 1, 312, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673107025452.jpeg'),
(14, 'A SUTIL ARTE DE LIGAR O FODA-SE', 37.45, 'Um guia completo e atualizado com a descrição detalhada de mais de 290 cristais e pedras de todo o mundo, suas propriedades terapêuticas e espirituais. De forma clara o autor introduz e orienta o leitor no mundo dos cristais, desde a identificação e seleç', 'Autoajuda', 'Impresso', 1, 1, '', '2017-01-01', 'MARK MANSON', '‎ Intrínseca', 'Português', 1, 224, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673107286780.jpeg'),
(15, 'A Seleção', 39.90, 'Muitas garotas sonham em ser princesas, mas este não é o caso de America Singer. Ela topa se inscrever na Seleção só para agradar a mãe, certa de que não será sorteada para participar da competição em que o príncipe escolherá sua futura esposa. Mas é clar', 'Literatura Infantojuvenil', 'Impresso', 1, 1, ' Livro brochura (pap', '2012-01-01', 'Cass, Kiera', ' Editora Schwarcz SA', 'Português', 1, 368, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673107469867.jpeg'),
(16, 'Harry Potter e o Prisioneiro de Azkaban', 59.90, 'As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste e solitária. Com muita ação, humor e magia, Harry Potter ', 'Literatura Infantojuvenil', 'Impresso', 1, 1, 'CAPA DURA', '2017-01-01', 'ROWLING, J.K.', 'ROCCO', 'Português', 1, 288, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673107627905.jpeg'),
(17, 'A rainha vermelha', 39.90, 'O mundo de Mare Barrow é dividido pelo sangue: vermelho ou prateado. Mare e sua família são vermelhos: plebeus, humildes, destinados a servir uma elite prateada cujos poderes sobrenaturais os tornam quase deuses. Mare rouba o que pode para ajudar sua famí', 'Literatura Infantojuvenil', 'Impresso', 1, 1, ' Livro brochura (pap', '2015-01-01', 'Aveyard, Victoria', ' Editora Schwarcz SA', 'Português', 1, 424, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673107739294.jpeg'),
(18, 'O pequeno príncipe', 21.90, 'Nesta clássica história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma jornada filosófica e poética através de planetas que encerram a solidão humana. A edi', 'Literatura Infantojuvenil', 'Impresso', 1, 1, '', '2018-01-01', 'Antoine de Saint-Exupéry', ' HarperCollins', 'Português', 1, 96, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673107886225.jpeg'),
(19, 'Como as democracias morrem', 44.90, 'Uma análise crua e perturbadora das ameaças às democracias em todo o mundo. Democracias tradicionais entram em colapso? Essa é a questão que Steven Levitsky e Daniel Ziblatt – dois conceituados professores de Harvard – respondem ao discutir o modo como a ', 'Ciências Humanas e Sociais', 'Impresso', 3, 1, ' Livro brochura (pap', '2018-01-01', 'Levitsky, Steven; Ziblatt, Daniel', ' Editora Schwarcz SA', 'Português', 1, 272, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673108064356.jpeg'),
(20, 'As aventuras de Mike', 45.90, 'Sabe aquele garoto popular da escola? Que é descolado se veste bem e faz sucesso com as garotas? Pois é, esse com certeza não é o Mike. Na verdade, o Mike é exatamente o contrário de tudo isso! Ele é desastrado, prefere videogames e salgadinhos no lugar d', 'Literatura Infantojuvenil', 'Impresso', 1, 1, ' Livro brochura (pap', '2019-01-01', ' Dearo, Gabriel; Digilio, Manu', ' Editora Planeta do Brasil Ltda.', 'Português', 1, 144, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673108148310.jpeg'),
(21, 'dasd', 25.00, 'dasdasd', 'dsa', 'Impresso', 0, 1, '', '0000-00-00', '', '', 'Português', 0, 0, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673996825152.jpeg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_itens`
--

CREATE TABLE `tb_itens` (
  `ID` int(11) NOT NULL,
  `QTDE` int(11) NOT NULL,
  `ID_PEDIDOS` int(11) NOT NULL,
  `BOOKS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pedidos`
--

CREATE TABLE `tb_pedidos` (
  `ID` int(11) NOT NULL,
  `TYPE_PEDIDO` varchar(20) NOT NULL,
  `STATUS_PEDIDO` varchar(20) NOT NULL,
  `VALOR_FRETE` float(10,2) DEFAULT NULL,
  `VALOR_PPEDIDO` float(10,2) DEFAULT NULL,
  `VALOR_TOTAL` float(10,2) DEFAULT NULL,
  `DATE_PEDIDO` datetime DEFAULT NULL,
  `DATE_ENTREGA` datetime DEFAULT NULL,
  `USERS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `FULL_NAME` varchar(100) NOT NULL,
  `USER_NAME` varchar(100) NOT NULL,
  `BIRTH_DATE` date DEFAULT NULL,
  `CPF` varchar(11) DEFAULT NULL,
  `SEXO` varchar(20) DEFAULT NULL,
  `TEL` varchar(13) DEFAULT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `UPASSWORD` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`ID`, `FULL_NAME`, `USER_NAME`, `BIRTH_DATE`, `CPF`, `SEXO`, `TEL`, `EMAIL`, `UPASSWORD`) VALUES
(1, 'Maria Isabel ', 'MariaIsa', '1991-09-28', '415.513.798', 'Venda_Troca', '3456', 'mariaisabel@gmail.com', '12345678'),
(5, 'Alberto Nascimento', 'AlbertN', '1981-02-15', '00000000000', 'Venda', '11965859658', 'alberto123@gmail.com', '12345678');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `galery_books`
--
ALTER TABLE `galery_books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`);

--
-- Índices para tabela `tb_adress`
--
ALTER TABLE `tb_adress`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USERS_ID` (`USERS_ID`);

--
-- Índices para tabela `tb_books`
--
ALTER TABLE `tb_books`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USERS_ID` (`USERS_ID`);

--
-- Índices para tabela `tb_itens`
--
ALTER TABLE `tb_itens`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `BOOKS_ID` (`BOOKS_ID`),
  ADD KEY `ID_PEDIDOS` (`ID_PEDIDOS`);

--
-- Índices para tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USERS_ID` (`USERS_ID`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `USER_NAME` (`USER_NAME`),
  ADD UNIQUE KEY `EMAIL` (`EMAIL`),
  ADD UNIQUE KEY `CPF` (`CPF`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `galery_books`
--
ALTER TABLE `galery_books`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de tabela `tb_adress`
--
ALTER TABLE `tb_adress`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `tb_books`
--
ALTER TABLE `tb_books`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de tabela `tb_itens`
--
ALTER TABLE `tb_itens`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `galery_books`
--
ALTER TABLE `galery_books`
  ADD CONSTRAINT `galery_books_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `tb_books` (`ID`);

--
-- Limitadores para a tabela `tb_adress`
--
ALTER TABLE `tb_adress`
  ADD CONSTRAINT `tb_adress_ibfk_1` FOREIGN KEY (`USERS_ID`) REFERENCES `users` (`ID`);

--
-- Limitadores para a tabela `tb_books`
--
ALTER TABLE `tb_books`
  ADD CONSTRAINT `tb_books_ibfk_1` FOREIGN KEY (`USERS_ID`) REFERENCES `users` (`ID`);

--
-- Limitadores para a tabela `tb_itens`
--
ALTER TABLE `tb_itens`
  ADD CONSTRAINT `tb_itens_ibfk_1` FOREIGN KEY (`BOOKS_ID`) REFERENCES `tb_books` (`ID`),
  ADD CONSTRAINT `tb_itens_ibfk_2` FOREIGN KEY (`ID_PEDIDOS`) REFERENCES `tb_pedidos` (`ID`);

--
-- Limitadores para a tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  ADD CONSTRAINT `tb_pedidos_ibfk_1` FOREIGN KEY (`USERS_ID`) REFERENCES `users` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
