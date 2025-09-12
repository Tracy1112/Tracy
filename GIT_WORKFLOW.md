# 📝 日常 Git 工作流简表

## 初始化（只做一次）
```bash
# 如果项目还没有 Git 仓库
git init -b main

# 关联远程仓库
git remote add origin https://github.com/Tracy1112/04-HomeAway_NextJs.git
```

---

## 日常开发流程

### 1. 拉取远程更新
```bash
git pull origin main
```
> 保证本地代码是最新的，避免冲突。

### 2. 写代码 / 改文件

### 3. 查看改动
```bash
git status
```

### 4. 添加改动
```bash
git add .
```

### 5. 提交改动
```bash
git commit -m "feat: 添加预订页面"   # 描述清楚这次改了什么
```

### 6. 推送到远程
```bash
git push
```

---

## 解决冲突（常见情况）

如果 `git pull` 或 `git push` 报错提示冲突：

```bash
# 查看冲突文件
git status

# 打开文件手动解决 <<<<<<< >>>>>>> 标记
# 解决后：
git add <冲突文件>
git commit     # 或 git rebase --continue
```

---

## 常见命令速查

- **查看分支**  
  ```bash
  git branch
  ```
- **切换分支**  
  ```bash
  git checkout <branch-name>
  ```
- **创建新分支**  
  ```bash
  git checkout -b <new-branch>
  ```
- **查看提交历史**  
  ```bash
  git log --oneline --graph --decorate
  ```

---

✅ 以后你只要记住最核心的三步：  

```bash
git add .
git commit -m "你的修改说明"
git push
```
